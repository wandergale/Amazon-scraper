import axios from "axios";
import { JSDOM } from "jsdom";

export const getScrapeData = async (keyword: string) => {
  // url to search on amazon
  const url = `http://www.amazon.com/s?k=${encodeURIComponent(keyword)}`;

  const { data: html } = await axios.get(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
    },
  });

  const dom = new JSDOM(html);
  const document = dom.window.document;
  // array of item
  const items: any[] = [];

  const productsEls = document.querySelectorAll(
    "[data-component-type='s-search-result']"
  );
  productsEls.forEach((el) => {
    const title = el.querySelector("h2 span")?.textContent?.trim();
    const rating = el.querySelector(".a-icon-alt")?.textContent?.split(" ")[0];
    const reviews = el
      .querySelector(".a-size-base.s-underline-text")
      ?.textContent?.trim();
    const image = el.querySelector("img")?.src;

    if (title) {
      items.push({ title, rating, reviews, image });
    }
  });

  return items;
};
