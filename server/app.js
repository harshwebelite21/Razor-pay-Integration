import { config } from "dotenv";
import express from "express";
import paymentRoute from "./routes/paymentRouter.js";
import cors from "cors";
config({ path: "./config/config.env" });
export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", paymentRoute);

app.get("/api/getkey", (req, res) => {
  res.json({ key: process.env.RAZORPAY_API_KEY });
});
