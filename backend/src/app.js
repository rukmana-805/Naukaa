import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";

import errorHandler from "./middlewares/error.middleware.js";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import organizationRoutes from "./routes/organization.routes.js";
import jobRoutes from "./routes/job.routes.js";
import applicationRoutes from "./routes/application.routes.js";
import paymentRoutes from "./routes/payment.routes.js";
import { razorpayWebhook } from "./controllers/payment.controller.js";

const app = express();

// Security middlewares
app.use(helmet());
app.use(cors({
    origin: "*", // later frontend URL daalenge
    credentials: true // cookie allow karne ke liye
}));

// should be before express.json() to handle raw body for webhooks(webhook need raw body to verify signature)
//webhook route FIRST
app.post(
  "/api/payment/webhook",
  express.raw({ type: "application/json" }),
  razorpayWebhook
);

// Body parsers
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true }));

// Cookie parser
app.use(cookieParser());

// Logger
app.use(morgan("dev"));

// Manual Routers
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/organizations", organizationRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/payment", paymentRoutes);

// Test route
app.get("/", (req, res) => {
    res.send("Naukaa API is running 🚀");
});

// Error middleware (always last)
app.use(errorHandler);

export default app;