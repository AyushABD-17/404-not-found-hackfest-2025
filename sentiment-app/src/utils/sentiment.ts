import * as tf from "@tensorflow/tfjs-node";
import { exec } from "child_process";
import { promises as fs } from "fs";
import path from "path";

let model: tf.LayersModel | null = null;
export const sentimentData: { timestamp: number; score: number }[] = [];

const MODEL_DIR = path.join(__dirname, "../../sentiment_model");
const TFJS_MODEL_DIR = path.join(MODEL_DIR, "tfjs");
const H5_PATH = path.join(MODEL_DIR, "tf_model.h5");

async function convertH5ToTFJS(): Promise<void> {
  console.log("Converting .h5 to TensorFlow.js format...");
  await new Promise((resolve, reject) => {
    exec(
      `tensorflowjs_converter --input_format=keras ${H5_PATH} ${TFJS_MODEL_DIR}`,
      (error, stdout, stderr) => {
        if (error) {
          console.error("Conversion error:", stderr);
          reject(error);
        } else {
          console.log("Conversion stdout:", stdout);
          console.log("Conversion stderr:", stderr);
          const modelJsonPath = path.join(TFJS_MODEL_DIR, "model.json");
          fs.stat(modelJsonPath)
            .then(() => console.log(`model.json exists at ${modelJsonPath}`))
            .catch(() => console.error(`model.json not found at ${modelJsonPath}`));
          resolve(void 0);
        }
      }
    );
  });
}

export async function loadModel(): Promise<void> {
  try {
    console.log("Checking for local model...");
    try {
      await fs.access(H5_PATH);
      console.log(`Found tf_model.h5 at ${H5_PATH}`);

      await fs.rm(TFJS_MODEL_DIR, { recursive: true, force: true });
      await fs.mkdir(TFJS_MODEL_DIR, { recursive: true });

      console.log("Converting H5 to TFJS");
      await convertH5ToTFJS();
      console.log("Loading model");
      model = await tf.loadLayersModel(`file://${path.join(TFJS_MODEL_DIR, "model.json")}`);
      console.log("Model loaded successfully");
    } catch (error) {
      console.warn("No local model found at", H5_PATH, ". Proceeding without model.");
      model = null; // Allow server to start without model
    }
  } catch (error) {
    console.error("Failed to load model:", error);
    process.exit(1);
  }
}

export function preprocessText(text: string): tf.Tensor2D {
  const words = text.toLowerCase().split(" ");
  const sequence = words.map((word) => word.charCodeAt(0) % 100);
  return tf.tensor2d([sequence], [1, sequence.length]);
}

export function cleanOldData(): void {
  const oneHourAgo = Date.now() - 60 * 60 * 1000;
  while (sentimentData.length > 0 && sentimentData[0].timestamp < oneHourAgo) {
    sentimentData.shift();
  }
}

export function aggregateSentiment(): { timestamp: number; average: number }[] {
  cleanOldData();
  const minuteBuckets: { [key: number]: { sum: number; count: number } } = {};
  sentimentData.forEach(({ timestamp, score }) => {
    const minute = Math.floor(timestamp / (60 * 1000)) * 60 * 1000;
    if (!minuteBuckets[minute]) minuteBuckets[minute] = { sum: 0, count: 0 };
    minuteBuckets[minute].sum += score;
    minuteBuckets[minute].count += 1;
  });
  return Object.entries(minuteBuckets).map(([timestamp, { sum, count }]) => ({
    timestamp: Number(timestamp),
    average: sum / count,
  }));
}

export async function analyzeSentiment(text: string): Promise<{ sentiment: string; confidence: number }> {
  if (!model) {
    console.warn("Model not loaded. Returning dummy response.");
    return { sentiment: "neutral", confidence: 0.5 }; // Dummy response
  }

  const inputTensor = preprocessText(text);
  const prediction = model.predict(inputTensor) as tf.Tensor;
  const score = prediction.dataSync()[0];
  return { sentiment: score > 0.5 ? "positive" : "negative", confidence: score };
}