require("dotenv").config();
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { rateLimit } from "express-rate-limit";
import { ErrorMiddleware } from "./middleware/error";
import feedbackRouter from "./routes/feedback.route"; // Singular
import { initializeWebSocket } from "./utils/websocket";
import { loadModel } from "./utils/sentiment";
import http from "http";
import cookieParser from "cookie-parser";

export const app = express();
const server = http.createServer(app);

// Middleware
app.use(express.json({ limit: "50mb" }));
app.use((req: Request, res: Response, next: NextFunction) => {
  res.setTimeout(0); // Disable timeout
  next();
});
app.set("trust proxy", true);
app.enable("trust proxy");
app.use(cookieParser());

// CORS
const corsOrigins = process.env.CORS_ORIGINS?.split(",") || [];
app.use(
  cors({
    origin: corsOrigins,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Rate limiter
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || "900000", 10),
  max: parseInt(process.env.RATE_LIMIT_MAX || "100", 10),
  standardHeaders: "draft-7",
  legacyHeaders: false,
});
app.use(limiter);

// Routes
app.use("/api/v1/feedback", feedbackRouter);

// Test Routes
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ success: true, message: "Hello Server" });
});

app.get("/test", (req: Request, res: Response) => {
  res.status(200).json({ success: true, message: "API is working" });
});

// Unknown Route
app.all("*", (req: Request, res: Response, next: NextFunction) => {
  const err = new Error(`Route ${req.originalUrl} not found`) as any;
  err.statusCode = 404;
  next(err);
});

// Error Middleware
app.use(ErrorMiddleware);

// Start Server
(async () => {
  console.log("Starting server...");
  await loadModel();
  initializeWebSocket(server);
  const port = parseInt(process.env.PORT || "3001", 10);
  server.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
})();

export const wss = initializeWebSocket(server);