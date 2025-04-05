// pages/api/ai-suggest.ts

import { Request, Response } from 'express'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { CatchAsyncError } from '../middleware/CatchAsyncError'
import ErrorHandler from '../utils/ErrorHandler'

// Initialize Gemini with API key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '')
const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-lite' })

// Check API key before initialization
if (!process.env.GEMINI_API_KEY) {
  console.error('GEMINI_API_KEY is not set in environment variables')
}

// Generate proactive response for negative feedback
export const generateProactiveResponse = CatchAsyncError(async (req: Request, res: Response) => {
  // Verify API key before making the request
  if (!process.env.GEMINI_API_KEY) {
    return res.status(500).json({ 
      success: false, 
      error: 'Gemini API key is not configured' 
    })
  }

  const { attendeeFeedback } = req.body

  if (!attendeeFeedback) {
    return res.status(400).json({ 
      success: false, 
      error: 'Missing feedback text' 
    })
  }

  const prompt = `
    An attendee just left this feedback: "${attendeeFeedback}".
    It seems to have a negative sentiment.

    Please draft a proactive and friendly message that:
    1. Acknowledges the concern.
    2. Asks for more context (if needed).
    3. Offers to help or suggests a fix.

    Keep it short, polite, and empathetic.
  `

  try {
    const result = await model.generateContent(prompt)
    const response = await result.response
    const text = response.text()

    res.status(200).json({ 
      success: true,
      message: text 
    })
  } catch (error: any) {
    console.error('Gemini API Error:', error)
    res.status(500).json({ 
      success: false,
      message: error.message || 'AI response generation failed'
    })
  }
})

// Generate suggestions for event improvement
export const generateEventSuggestions = CatchAsyncError(async (req: Request, res: Response) => {
  const { eventDetails, feedbackSummary } = req.body

  if (!eventDetails || !feedbackSummary) {
    return res.status(400).json({ error: 'Missing event details or feedback summary' })
  }

  const prompt = `
    Based on this event information:
    ${JSON.stringify(eventDetails)}

    And this feedback summary:
    ${feedbackSummary}

    Please provide 3-5 specific, actionable suggestions for improving future events.
    Format as a JSON array of objects with:
    - suggestion: The improvement idea
    - impact: Expected benefit
    - implementation: How to implement it
  `

  const result = await model.generateContent(prompt)
  const response = await result.response
  const text = response.text()

  try {
    const suggestions = JSON.parse(text)
    res.status(200).json({ suggestions })
  } catch (error) {
    res.status(200).json({ suggestions: text })
  }
})

// Generate event summary insights
export const generateEventInsights = CatchAsyncError(async (req: Request, res: Response) => {
  const { eventData, feedbackData } = req.body

  if (!eventData || !feedbackData) {
    return res.status(400).json({ error: 'Missing event or feedback data' })
  }

  const prompt = `
    Analyze this event data:
    ${JSON.stringify(eventData)}

    And this feedback data:
    ${JSON.stringify(feedbackData)}

    Provide insights in JSON format with:
    - key_highlights: Array of main positive points
    - areas_of_improvement: Array of aspects needing attention
    - recommendations: Array of specific suggestions
    - sentiment_summary: Overall attendee sentiment analysis
  `

  const result = await model.generateContent(prompt)
  const response = await result.response
  const text = response.text()

  try {
    const insights = JSON.parse(text)
    res.status(200).json({ insights })
  } catch (error) {
    res.status(200).json({ insights: text })
  }
})

// In your client-side code (e.g., inside a useEffect or on button click)

const sendProactiveMessage = async (feedback: string) => {
    const res = await fetch('/api/ai-suggest', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ attendeeFeedback: feedback })
    })
  
    const data = await res.json()
    console.log('Proactive Message:', data.message)
  }
  
