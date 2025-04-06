import { LayersModel } from "@tensorflow/tfjs-node";

export interface SentimentData {
  timestamp: number;
  score: number;
}

export interface AggregatedSentiment {
  timestamp: number;
  average: number;
}

export interface SentimentResult {
  sentiment: string;
  confidence: number;
}

export let model: LayersModel;