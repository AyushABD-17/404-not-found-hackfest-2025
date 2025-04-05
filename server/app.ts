require("dotenv").config();
import cookieParser from "cookie-parser";
import express, { NextFunction, Request, Response } from "express";
export const app = express();
import cors from "cors";
import { ErrorMiddleware } from "./middleware/error";
import { rateLimit } from "express-rate-limit";
import userRouter from "./routes/user.route";
import passport from "passport";
import "./config/google.strategy";
import { accessTokenOptions, refreshTokenOptions } from "./utils/jwt";
import eventRoutes from './routes/event.route';
import issueRouter from './routes/issue.route';
import feedbackRouter from './routes/feedback.route';
import shortFeedbackRouter from './routes/shortFeedback.route';
import geminiRouter from './routes/gemini.route';
app.use(express.json({ limit: "50mb" }));

app.use((req, res, next) => {
  res.setTimeout(0); // Disable timeout
  next();
});

app.set("trust proxy", true);
app.enable("trust proxy");

app.use(cookieParser());

// cors = cross origin resource sharing
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:4000",
    ],
    // origin: "https://datascienceclubhit.netlify.app",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// api request limit
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: "draft-7",
  legacyHeaders: false,
});

// Register routes
app.use("/api/v1", userRouter);
app.use('/api/v1/events', eventRoutes);
app.use('/api/v1/issue', issueRouter);
app.use('/api/v1/feedback', feedbackRouter);
app.use('/api/v1/short-feedback', shortFeedbackRouter);
app.use('/api/v1/gemini', geminiRouter);

//google auth route
app.get(
  "/auth/google",
  (req, res, next) => {
    const redirectTo = req.query.redirectTo || "/";
    res.cookie("redirectTo", redirectTo, {
      httpOnly: false,
      sameSite:"none",
      secure:true,
      maxAge: 10 * 60 * 1000,
      ...(process.env.NODE_ENV === "production" && { domain: "dsch.site" }),
    });
    next();
  },
  passport.authenticate("google", {
    session: false,
    scope: ["profile", "email"],
  })
);


app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: `${process.env.FRONTEND_HOST}/signin`,
  }),
  function (req, res) {
    const { user, accessToken, refreshToken } = req.user as any;

    res.cookie("access_token", accessToken, accessTokenOptions);
    res.cookie("refresh_token", refreshToken, accessTokenOptions);

    let redirectUrl = req.cookies.redirect_url || "/";

    // Ensure redirect URL points to frontend (localhost:3000)
    redirectUrl = `${process.env.FRONTEND_HOST}${decodeURIComponent(
      redirectUrl
    )}`;

    res.clearCookie("redirect_url");
    res.send(
      `<script>
      window.opener.postMessage({ success: true, redirectUrl: '${redirectUrl}' }, '*');
      window.close();
    </script>`
    );
  }
);

// testing api
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    success: true,
    message: "Hello Server",
  });
});

app.get("/test", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    success: true,
    message: "API is working",
  });
});

//unknown route
app.all("*", (req: Request, res: Response, next: NextFunction) => {
  const err = new Error(`Route ${req.originalUrl} not found`) as any;
  err.statusCode = 404;
  next(err);
});

// middleware calls
app.use(limiter);
app.use(ErrorMiddleware);
