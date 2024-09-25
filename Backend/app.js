import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser());
app.use(express.json());

// CORS configuration
app.use(
  cors({
    origin: 'http://localhost:5173', // Your frontend URL
    credentials: true, // Allow credentials (cookies, tokens, etc.)
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization', 'x-csrf-token'], // Allowed headers
  })
);




// Parsing URL-encoded data and static files
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Importing and using routes
import User_Route from "./src/routes/user.route.js";
app.use("/api/users", User_Route);

export default app;
