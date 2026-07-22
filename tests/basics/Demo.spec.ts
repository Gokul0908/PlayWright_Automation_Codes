import {test, expect} from '@playwright/test';


test("Verifying the page title", async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    let title = await page.title();
    console.log("The Title is: " + title);
    await expect(page).toHaveTitle(/Automation Testing Practice/);
});

test("Verifying the page url ", async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    let url = page.url();
    console.log("The URL is: " + url);
    await expect(page).toHaveURL(/testautomationpractice\.blogspot\.com/);
});