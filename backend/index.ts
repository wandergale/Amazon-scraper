import express from "express";
import dotenv from "dotenv";
import scrapeRoutes from "./routes/scrapeRoutes";
import cors from "cors";

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET",
  })
);

app.use("/api", scrapeRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
