import type { RequestHandler } from "@builder.io/qwik-city";
import puppeteer from "puppeteer-core";

export const onGet: RequestHandler = async ({ send }) => {
  const browser =
    process.env.NODE_ENV === "development"
      ? await puppeteer.launch({
          executablePath: import.meta.env.PUBLIC_CHROME_EXECUTABLE_PATH,
        })
      : await puppeteer.connect({
          browserWSEndpoint: `wss://chrome.browserless.io?token=${import.meta.env.PUBLIC_BROWSERLESS_TOKEN}`,
        });

  const page = await browser.newPage();

  const websiteUrl = import.meta.env.PUBLIC_ORIGIN_URL as string;

  try {
    await page.goto(websiteUrl, { waitUntil: "networkidle0" });

    const pdf = await page.pdf({
      displayHeaderFooter: true,
      margin: { top: "50px", right: "50px", bottom: "50px", left: "50px" },
      printBackground: true,
      format: "A4",
    });

    send(
      200,
      new Uint8Array(
        await new Blob([pdf], { type: "application/pdf" }).arrayBuffer(),
      ),
    );
  } catch {
    send(
      200,
      new Uint8Array(
        await new Blob([], { type: "application/pdf" }).arrayBuffer(),
      ),
    );
  }
};
