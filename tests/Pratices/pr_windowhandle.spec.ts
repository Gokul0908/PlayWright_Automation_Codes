import { test, expect } from '@playwright/test';

test('Window Handle', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        page.click('#PopUp')
    ]);


    await newPage.waitForLoadState();
    console.log(await newPage.title());
    await newPage.close();
});