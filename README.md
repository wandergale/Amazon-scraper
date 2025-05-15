# ♻ Amazon Scraper - Fullstack project
This is a fullstack project for scraping amazon products using a keyword. <br/>
It include a backend build with **Bun** + **Typescript + Axios + Express + JSDOM**, and a <br/>
frontend build with **Vite + Vanilla + Javascript + HTML + CSS**.

## 📁 Struture
`backend/` &rarr; API for scraping Amazon search results <br/>
`frontend/` &rarr; Web interface to search and display results

## 🏆 Features
- Search for products on Amazon by keyword<br/>
- Display product title, price, rating, number of reviews, image and link<br/>
- Scraping handled via backend using `axios` + `JSDOM`<br/>
- AJAX call from frontend to backend<br/>
- Clean UI styled with Amazon-inspired colors

## ⭐ Technologies
### Backend:
- [Bun](https://bun.sh/)
- TypeScript
- Express
- Axios
- JSDOM

### Frontend:
- Vite
- HTML
- CSS
- Vanilla JavaScript
  
## ▶️ How to Run

### 1️⃣ Clone the repository:
```bash
git@github.com:wandergale/Amazon-scraper.git
cd amazon-scraper
```
### 2️⃣ Backend Setup
```bash
cd backend
bun install
bun run dev
```
### 3️⃣ Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
## 📂Individual READMEs
[Backend](/backend/README.md)<br/>
[Frontend](/frontend/README.md)
