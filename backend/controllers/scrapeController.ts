import type { Request, Response } from "express";
import { getScrapeData } from "../services/scrapeService";

export const scrapeAmazon = async (req: Request, res: Response) => {
  const { keyword } = req.query;

  if (!keyword) {
    res.status(400).json({ error: "Keyword is required!" });
    return;
  }

  try {
    const data = await getScrapeData(keyword as string);
    res.json(data);
  } catch (error) {
    console.error("Scraping error");
    res.status(500).json({ error: "Falied to scrape Amazon" });
  }
};
