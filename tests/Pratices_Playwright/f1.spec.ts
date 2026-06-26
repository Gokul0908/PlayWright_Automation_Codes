import { test, expect, chromium } from '@playwright/test'


test("Pratice all ", async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();


    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    const text = page.getByRole('heading', { name: 'Practice Page' });
    await expect(text).toBeVisible();

})