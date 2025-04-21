# Backend - Amazon Scraper

## 🛠 Technologies used
* [Bun](https://bun.sh)
* Typescript
* Express
* Axios
* JSDOM

## 📁 Project Struture
📁backend <br />
&nbsp;&nbsp;&nbsp;&nbsp;📁controllers <br />
&nbsp;&nbsp;&nbsp;&nbsp;📁routes <br />
&nbsp;&nbsp;&nbsp;&nbsp;📁services <br />
&nbsp;&nbsp;&nbsp;&nbsp;🗄index.ts <br />
&nbsp;&nbsp;&nbsp;&nbsp;🗄bun.lockb <br />
&nbsp;&nbsp;&nbsp;&nbsp;🗄tsconfig.json <br />
&nbsp;&nbsp;&nbsp;&nbsp;🗄.env <br />
&nbsp;&nbsp;&nbsp;&nbsp;🗄package.json <br />

## ▶ How to Run
1️⃣ Clone de repository: `git@github.com:wandergale/Amazon-scraper.git` <br/>
2️⃣
`cd backend`<br/>
3️⃣
Create a .env file and put `PORT=3000`<br/>
4️⃣
`bun install`<br/>
5️⃣
`bun run dev`<br/>
## ⚠ Notes
If you encounter CORS issues when connecting the frontend and the backend, you may need to change the origin on index.ts [index.ts](/backend/index.ts)
