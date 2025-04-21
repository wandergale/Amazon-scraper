import axios from "axios";
import { JSDOM } from "jsdom";

export const getScrapeData = async (keyword: string) => {
  // url to search on amazon br
  const url = `http://www.amazon.com.br/s?k=${encodeURIComponent(keyword)}`;

  const { data: html } = await axios.get(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
      "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
      "Accept-Encoding": "gzip, deflate, br",
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
    const priceWhole =
      el.querySelector(".a-price-whole")?.textContent?.replace(/[.,]/g, "") ||
      "";
    const priceFraction =
      el
        .querySelector(".a-price-fraction")
        ?.textContent?.replace(/[^\d]/g, "") || "";
    const price =
      priceWhole && priceFraction ? `${priceWhole}.${priceFraction}` : null;
    const reviews = el
      .querySelector(".a-size-base.s-underline-text")
      ?.textContent?.trim();
    const image = el.querySelector("img")?.src;

    if (title) {
      items.push({
        title,
        rating: rating || "N/A",
        reviews: reviews || "0",
        price,
        image,
      });
    }
  });

  return items;
};
