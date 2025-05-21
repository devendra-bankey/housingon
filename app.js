import express from "express";
const app = express();
import cors from "cors";
import "dotenv/config";
import Router from "./routes/index.js";

app.use(cors()); //cross origin resource sharing other project to communicate with this project
app.use(express.json()); //when we pass json data to api this middleware helps api to understand the json
app.use("/", Router);

export default app;
