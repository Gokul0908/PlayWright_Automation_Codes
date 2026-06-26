import { test, expect, Locator } from '@playwright/test'




const testData: string[][] = [
    ["laura.taylor1234@example.com", "test123", "valid"],
    ['laura@example.com', 'test123', 'invalid'],
    ['laura.taylor1234@example.com', 'testqwe', 'invalid'],
    ['', '', 'invalid']
]

for (const [email, password, Validity] of testData) {


    test.describe("Passing test Data", async () => {

        test(`Parametezation ${email}, ${password}`, async ({ page }) => {

            await page.goto("https://demowebshop.tricentis.com/login");
            page.locator("#Email").fill(email);
            await page.waitForTimeout(2344);
            page.locator("#Password").fill(password);
            await page.waitForTimeout(2344);
            page.locator("(//input[@type='submit'])[2]").click();
            await page.waitForTimeout(2344);

            if (Validity === 'valid') {
                await expect(page.locator(".ico-logout")).toBeVisible();
            }
            else {
                const err = page.locator('.validation-summary-errors');
                expect(err).toBeVisible({timeout:2344})
                expect(page).toHaveURL("https://demowebshop.tricentis.com/login");
            }
        })
    })
}