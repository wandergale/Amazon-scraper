import { Router } from "express";
import { scrapeAmazon } from "../controllers/scrapeController";

const router = Router();

router.get("/scrape", scrapeAmazon);

export default router;
