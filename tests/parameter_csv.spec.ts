/// <reference types="node" />

import { test, expect } from '@playwright/test'
import fs from 'fs';
import { parse } from 'csv-parse/sync'

const ExcelData = 'testData/data.csv';
const fileData = fs.readFileSync(ExcelData, 'utf-8');
const records = parse<{ email: string; password: string; validity: string }>(fileData, { columns: true, skip_empty_lines: true })

test.describe('Passing test Data', async () => {

    for (const data of records) {

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
        })
    }
})