import { test, expect, chromium } from '@playwright/test'


test("Practice all", async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();


    await page.goto("https://rahulshettyacademy.com/AutomationPractice/", { waitUntil: 'domcontentloaded', timeout: 30000 });
    const text = page.getByRole('heading', { name: 'Practice Page' });
    await expect(text).toBeVisible();

    const Radio1 = page.getByLabel('Radio1');
    const r1 = await Radio1.isChecked();
    if (!r1) {
        await Radio1.check();
    }

    await browser.close();
})