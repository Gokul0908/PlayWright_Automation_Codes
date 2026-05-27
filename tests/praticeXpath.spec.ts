import {test, expect, Locator} from "@playwright/test";


test("Practice Xpath in Playwright", async ({ page }) => {
    await page.goto("https://www.w3schools.com/html/html_tables.asp");
    const germanyCell: Locator = page.locator("//table[@id='customers']//tr[2]/td[.='Germany']");
    await expect(germanyCell).toBeVisible();
});