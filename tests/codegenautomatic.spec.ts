import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.getByRole('textbox', { name: 'Enter Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Name' }).fill('Gok\'s');
  await page.waitForTimeout(1234);
  await page.getByRole('textbox', { name: 'Enter EMail' }).click();
  await page.getByRole('textbox', { name: 'Enter EMail' }).fill('youremail@gmail.com');
  await page.getByRole('textbox', { name: 'Enter Phone' }).click();
  await page.getByRole('textbox', { name: 'Enter Phone' }).fill('9080556909');
  await page.waitForTimeout(1234);
  await page.getByRole('textbox', { name: 'Address:' }).click();
  await page.getByRole('textbox', { name: 'Address:' }).click();
  await page.getByRole('textbox', { name: 'Address:' }).fill('your Address');
  await page.getByRole('textbox', { name: 'Enter Phone' }).click();
  await page.getByRole('textbox', { name: 'Enter Phone' }).press('Shift+Home');
  await page.getByRole('textbox', { name: 'Enter Phone' }).fill('-090987890');
  await page.getByRole('radio', { name: 'Female' }).check();
  await page.getByRole('checkbox', { name: 'Sunday' }).check();
  await page.waitForTimeout(1234);
  await page.getByRole('checkbox', { name: 'Sunday' }).uncheck();
  await page.getByRole('checkbox', { name: 'Sunday' }).check();
  await page.getByRole('checkbox', { name: 'Sunday' }).uncheck();
  await page.getByRole('checkbox', { name: 'Friday' }).check();
  await page.waitForTimeout(1234);
  await expect(page.getByRole('heading', { name: 'Automation Testing Practice' })).toBeVisible();
  await expect(page.locator('#post-body-1307673142697428135')).toContainText('Name:');
  await page.waitForTimeout(1234);
  await expect(page.getByRole('textbox', { name: 'Enter EMail' })).toHaveValue('youremail@gmail.com');
  await expect(page.locator('#header-inner')).toMatchAriaSnapshot(`
    - heading "Automation Testing Practice" [level=1]
    - paragraph: For Selenium, Cypress & Playwright
    `);
});