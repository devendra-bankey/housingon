import app from "../app.js";
import express from "express";
const Router = express.Router();
Router.get("/", (req, res) => {
  res.send("Hello");
});

export default Router;
