import express from "express";
const app = express();
import cors from "cors";
import "dotenv/config";
import Router from "./routes/index.js";
import cookieParser from "cookie-parser";

app.use(cookieParser());
app.use(
  cors({
    origin: process.env.APP_BASE_URL,
    credentials: true,
  })
); //cross origin resource sharing other project to communicate with this project
app.use(express.json()); //when we pass json data to api this middleware helps api to understand the json
app.use("/", Router);

export default app;
