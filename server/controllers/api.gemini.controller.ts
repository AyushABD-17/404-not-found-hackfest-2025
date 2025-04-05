import { Request, Response } from 'express';
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini with API key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-lite" });

// Define the structure of incoming event data
interface EventDetails {
  eventName: string;
  startDate: string;
  endDate: string;
  venue: string;
  location: string;
  expectedAttendees: number;
  description: string;
}

export const predictEventIssues = async (req: Request, res: Response) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST requests are allowed" });
  }

  try {
    const {
      eventName,
      startDate,
      endDate,
      venue,
      location,
      expectedAttendees,
      description,
    } = req.body as EventDetails;

    const prompt = `
You're an AI assistant helping event organizers detect potential issues in advance.
Analyze the following event details and return a comma-separated list of possible event issues or challenges they may face.

Event Name: ${eventName}
Start Date: ${startDate}
End Date: ${endDate}
Venue: ${venue}
Location: ${location}
Expected Attendees: ${expectedAttendees}
Description: ${description}

Only return issue keywords, no extra explanation as list. Example: "overcrowding, power outage, low network coverage"
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.status(200).json({ issues: text.trim() });
  } catch (error: unknown) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ error: "AI issue prediction failed" });
  }
};
