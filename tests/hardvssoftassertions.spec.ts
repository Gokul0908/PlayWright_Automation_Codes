import { test, expect, Locator } from "@playwright/test";

test("Pratice Hard vs Soft Assertions", async ({ context }) => {


    const page = await context.newPage();

    await page.goto("https://playwright.dev/docs/test-timeouts");


    // //Hard Assertions
    // await expect(page).toHaveURL("https://playwright.dev/docs/test-timeouts");
    // await expect(page).toHaveTitle("Timeouts | Playwright");

    // const logo = page.locator("//img[@alt='Playwright logo']");
    // await expect(logo).toBeVisible();


    //soft Assertions


    //  //Hard Assertions
    await expect.soft(page).toHaveURL("https://playwright.dev/docs/test-timeouts");
    await expect.soft(page).toHaveTitle("Timeouts | Playwright");

    const logo = page.locator("//img[@alt='Playwright logo']");
    await expect.soft(logo).toBeVisible();






})