import { Router } from "express";
import { analyzeSentiment, sentimentData } from "../utils/sentiment";
import { broadcastSentiment } from "../utils/websocket";
import { wss } from "../server";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: "Text is required" });

  try {
    const { sentiment, confidence } = await analyzeSentiment(text);
    sentimentData.push({ timestamp: Date.now(), score: confidence });
    broadcastSentiment(wss);

    res.json({ sentiment, confidence });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Sentiment analysis failed" });
  }
});

export default router;