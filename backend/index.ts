import express from "express";
import dotenv from "dotenv";
import { scrapeAmazon } from "./controllers/scrapeController";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use("/api", scrapeAmazon);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
