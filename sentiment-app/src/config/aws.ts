import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { promises as fs } from "fs";
import path from "path";

if (!process.env.AWS_ACCESS_KEY_ID || !process.env.AWS_SECRET_ACCESS_KEY || !process.env.AWS_REGION) {
  throw new Error("AWS credentials or region not provided in .env");
}

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export const BUCKET_NAME = process.env.AWS_BUCKET_NAME || "my-sentiment-model-bucket";
export const H5_KEY = process.env.AWS_H5_KEY || "tf_model.h5";
export const MODEL_DIR = path.join(__dirname, "../../sentiment_model");
export const TFJS_MODEL_DIR = path.join(MODEL_DIR, "tfjs");

export async function downloadModelFromS3(): Promise<void> {
  console.log("Downloading model from S3...");
  const params = { Bucket: BUCKET_NAME, Key: H5_KEY };
  const filePath = path.join(MODEL_DIR, "tf_model.h5");

  try {
    await fs.mkdir(MODEL_DIR, { recursive: true });
    const command = new GetObjectCommand(params);
    const { Body } = await s3Client.send(command);

    if (!Body) {
      throw new Error(`Failed to retrieve ${H5_KEY} from S3 bucket ${BUCKET_NAME}`);
    }

    const writeStream = require("fs").createWriteStream(filePath);
    await new Promise((resolve, reject) => {
      (Body as NodeJS.ReadableStream).pipe(writeStream);
      writeStream.on("finish", () => {
        console.log(`Model downloaded successfully to ${filePath}`);
        resolve(void 0);
      });
      writeStream.on("error", (err: Error) => { // Added type annotation
        console.error("Download error:", err);
        reject(err);
      });
    });

    await fs.access(filePath);
    console.log(`Verified ${filePath} exists`);
  } catch (error) {
    console.error("Failed to download model:", error);
    throw error;
  }
}