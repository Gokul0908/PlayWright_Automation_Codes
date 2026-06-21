import { test, expect } from '@playwright/test'
import fs from 'fs';

const jsonPath = 'testData/testData.json';
const testData: any = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

test.describe('Passing test Data', async () => {
    for (const { email, password, Validity } of testData) {
        test(`Parametezation ${email}, ${password}`, async ({ page }) => {
            await page.goto('https://demowebshop.tricentis.com/login');
            await page.locator('#Email').fill(email);
            await page.waitForTimeout(2344);
            await page.locator('#Password').fill(password);
            await page.waitForTimeout(2344);
            await page.locator('(//input[@type="submit"])[2]').click();
            await page.waitForTimeout(2344);

            if (Validity === 'valid') {
                await expect(page.locator('.ico-logout')).toBeVisible();
            } else {
                const err = page.locator('.validation-summary-errors');
                await expect(err).toBeVisible({ timeout: 2344 });
                await expect(page).toHaveURL('https://demowebshop.tricentis.com/login');
            }
        })
    }
})