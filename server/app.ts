// require("dotenv").config();
// import express, { NextFunction, Request, Response } from "express";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import { ErrorMiddleware } from "./middleware/error";
// import userRouter from "./routes/user.routes";
// import courseRouter from "./routes/course.routes";
// import notificationRoute from "./routes/notification.routes";
// import analyticsRouter from "./routes/analytics.routes";
// import layoutRouter from "./routes/layout.routes";

// export const app = express();

// // Debug PORT
// console.log("PORT from .env:", process.env.PORT);

// // Body parser
// app.use(express.json({ limit: "50mb" }));

// // Cookie parser
// app.use(cookieParser());

// // CORS cross-origin resource sharing
// app.use(
//   cors({
//     origin: process.env.ORIGIN,
//   })
// );

// //routes
// app.use(
//   "/api/v1",
//   userRouter,
//   courseRouter,
//   notificationRoute,
//   analyticsRouter,
//   layoutRouter
// );

// //testinf API
// app.get("/test", (req: Request, res: Response, next: NextFunction) => {
//   res.status(200).json({
//     success: true,
//     message: "API is Working",
//   });
// });

// app.all("*", (req: Request, res: Response, next: NextFunction) => {
//   const err = new Error(`Route ${req.originalUrl} not found`) as any;
//   err.status = 404;
//   next(err);
// });

// app.use(ErrorMiddleware);

require("dotenv").config();
import express, { NextFunction, Request, Response } from "express";
import cors, { CorsOptions } from "cors";
import cookieParser from "cookie-parser";
import { ErrorMiddleware } from "./middleware/error";
import userRouter from "./routes/user.routes";
import courseRouter from "./routes/course.routes";
import notificationRoute from "./routes/notification.routes";
import analyticsRouter from "./routes/analytics.routes";
import layoutRouter from "./routes/layout.routes";

export const app = express();

// Debug PORT
console.log("PORT from .env:", process.env.PORT);

// Define CORS options
const corsOptions: CorsOptions = {
  origin: "http://127.0.0.1:5173",
  credentials: true, // Allow credentials (cookies, authorization headers)
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allowed HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
};

// Apply middleware
app.use(express.json({ limit: "50mb" })); // Body parser
app.use(cookieParser()); // Cookie parser
app.use(cors(corsOptions)); // CORS middleware

// Routes
app.use(
  "/api/v1",
  userRouter,
  courseRouter,
  notificationRoute,
  analyticsRouter,
  layoutRouter
);

// Test API
app.get("/test", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    success: true,
    message: "API is Working",
  });
});

// Handle undefined routes
app.all("*", (req: Request, res: Response, next: NextFunction) => {
  const err = new Error(`Route ${req.originalUrl} not found`) as any;
  err.status = 404;
  next(err);
});

// Error handling middleware
app.use(ErrorMiddleware);
