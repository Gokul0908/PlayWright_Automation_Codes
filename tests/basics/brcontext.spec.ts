import { test, expect, chromium } from "@playwright/test"

test("Pratice Browser context method's", async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page1 = await context.newPage();
    const page2 = await context.newPage();

    const TotalPages = context.pages().length;
    console.log("Number of pages created by context is ===>" + TotalPages)

    await page1.goto("https://playwright.dev/docs/intro", { timeout: 2345 });
    await page2.goto("https://prepaid.sbi.bank.in/web/#/home", { timeout: 2345 });

    await page1.waitForTimeout(2000);
    await browser.close();
})

