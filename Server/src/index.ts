import express from "express";
import cors from "cors";
import { env } from "./config/env";
import contactRouter from "./routes/contact";

const app = express();

app.use(cors({ origin: env.corsOrigin }));
app.use(express.json());

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

app.use("/api/contact", contactRouter);

app.listen(env.port, () => {
  console.log(`HappyMeals backend listening on port ${env.port}`);
});
