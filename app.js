import express from "express";
const app = express();
import cors from "cors";
import Router from "./Routes/index.js";

app.use(cors()); //cross origin resource sharing other project to communicate with this project
app.use(express()); //body parser
app.use("/", Router);

export default app;
