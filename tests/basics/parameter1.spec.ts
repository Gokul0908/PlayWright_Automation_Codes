import { test, expect } from '@playwright/test';


const searchItem: string[] = ['laptop', 'Gift card', 'smartphone', 'jewelry']



// for (let item of searchItem) {

//   test(`Searching Products ${item}`, async ({ page }) => {
//     await page.goto('https://demowebshop.tricentis.com/');
//     await page.locator('#small-searchterms').fill(item);
//     await page.getByRole('button', { name: 'Search' }).click();
//     // await expect(page.locator('h2')).toContainText('Laptop');
//   });
// }


searchItem.forEach(item => {

  test(`Searching Products ${item}`, async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');
    await page.locator('#small-searchterms').fill(item);
    await page.getByRole('button', { name: 'Search' }).click();
    // await expect(page.locator('h2')).toContainText('Laptop');
  });


});
