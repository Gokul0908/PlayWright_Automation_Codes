import { test, expect, Locator } from '@playwright/test';

test("CSS Locator Test", async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    //CSS selector to locate the input element with id  or remove tagname  like #name
    const element: Locator = page.locator('input#name');
    await element.fill("Gok's");
    await expect(element).toBeVisible();

    //using class name to locate the element  or remove tagname like .start
    const elementByClass: Locator = page.locator('button.start');
    await elementByClass.click();
    const stop: Locator = elementByClass.getByText('STOP');
    // await expect(stop).toBeVisible();
    console.log("Element with text 'STOP' is visible: " + stop);

    page.waitForLoadState('load');

    
});