import express from "express";
import dotenv from "dotenv";
import scrapeRoutes from "./routes/scrapeRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use("/api", scrapeRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
