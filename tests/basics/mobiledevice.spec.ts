import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 15'],
});

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/?m=1');
  await page.getByRole('textbox', { name: 'Enter Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Name' }).fill('Gok\'s');
  await page.getByRole('textbox', { name: 'Enter EMail' }).click();
  await page.getByRole('textbox', { name: 'Enter EMail' }).fill('gokulmillionaire@gmail.co');
  await page.getByRole('textbox', { name: 'Enter EMail' }).press('Home');
  await page.getByRole('textbox', { name: 'Enter EMail' }).press('End');
  await page.getByRole('textbox', { name: 'Enter EMail' }).fill('gokulmillionaire@gmail.co');
  await page.getByLabel('Colors:').selectOption('blue');
  await page.getByRole('button', { name: 'Upload Single File' }).click();
});