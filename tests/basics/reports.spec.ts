import { test, expect, Locator } from '@playwright/test'



test.beforeEach("Reports Before Each", async ({ page }) => {

    await page.goto("https://demowebshop.tricentis.com/login");
})


test("Verify the logo", async ({ page }) => {
    const logo: Locator = page.locator("img[alt='Tricentis Demo Web Shop']");
    await expect(logo).toBeVisible();
});

test("Verify the login page title", async ({ page }) => {
    await expect(page).toHaveTitle("Demo Web Shop. Login");
})

test("Verify the login page URL", async ({ page }) => {
     await expect(page).toHaveURL("https://demowebshop.tricentis.com/login");
})