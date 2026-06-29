import { test, expect, chromium } from '@playwright/test'


test("Practice all", async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/", { waitUntil: 'domcontentloaded', timeout: 30000 });
    const text = page.getByRole('heading', { name: 'Practice Page' });
    await expect(text).toBeVisible();

    const Radio2 = page.getByLabel('radio2');
    const r1 = await Radio2.isChecked();
    if (!r1) {
        await Radio2.check();
    }

    await browser.close();
})