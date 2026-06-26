import { test, expect } from '@playwright/test';
import * as XLSX from 'xlsx';

const excelPath = 'testData/ExcelData.xlsx';
const workbook = XLSX.readFile(excelPath);
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];
const LoginData = XLSX.utils.sheet_to_json(worksheet) as Array<{ email: string; password: string; validity: string }>;
console.log(LoginData);

test.describe('Passing test Data', () => {
    for (const data of LoginData) {
        test(`Login Data from csv "${data.email}", and Password : "${data.password}"`, async ({ page }) => {
            await page.goto('https://demowebshop.tricentis.com/login');
            await page.locator('#Email').fill(data.email);
            await page.waitForTimeout(500);
            await page.locator('#Password').fill(data.password);
            await page.waitForTimeout(500);
            await page.locator('(//input[@type="submit"])[2]').click();
            await page.waitForTimeout(500);

            if (data.validity === 'valid') {
                await expect(page.locator('.ico-logout')).toBeVisible();
            } else {
                const err = page.locator('.validation-summary-errors');
                await expect(err).toBeVisible({ timeout: 5000 });
                await expect(page).toHaveURL('https://demowebshop.tricentis.com/login');
            }
        });
    }
});