import puppeteer from "puppeteer";

const url = process.argv[2] || "https://school.codespanda.com";
const outPath = process.argv[3] || "docs/screenshot.png";

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: "networkidle0", timeout: 60000 });
// Give any lazy content / fonts a moment to settle.
await new Promise((r) => setTimeout(r, 800));
await page.screenshot({ path: outPath });
await browser.close();
console.log(`Saved screenshot to ${outPath}`);
