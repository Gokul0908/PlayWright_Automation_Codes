/*
These are the recommended built-in locators.

page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
*/

import {test, expect, Locator} from '@playwright/test';

test("Verifying locators in Playwright", async ({ page }) => {
    // await page.goto('http://127.0.0.1:5500/tests/app.html');
    await page.goto("http://127.0.0.1:5500/tests/app.html");
    const logo:Locator = page.getByAltText('nopCommerce demo store');
    await expect(logo).toBeVisible();

    const Text:Locator = page.getByText("Automation Testing Practice");

    console.log(await Text.textContent());
    await expect(Text).toBeVisible();  //Full Exact Text
    // await expect(page.getByText("Welcome to ")).toBeVisible();  //Partial Text
    // await expect(page.getByText(/WELCOME\s+TO\s+OUR\s+STORE/i)).toBeVisible();  //Regular Expression with case insensitivity and ignoring extra spaces

    //Get element by role
    // await page.getByRole("link", {name: 'Home'}).click();
    await expect(page.getByRole("heading", {name: 'GUI Elements'})).toBeVisible();

    //Get element by label      
    await page.getByLabel('Name:').fill('Gokul');
    await page.getByLabel('Email:').fill('dummy@gmail.com');
    await page.getByLabel('Phone:').fill('1234567890');

//page.getByPlaceholder() to locate an input by placeholder.
await expect(page.getByPlaceholder('Select an item')).toBeVisible();
await page.getByPlaceholder('Select an item').fill('Gokul');

const titleLocator:Locator =  page.getByTitle('Submit Button');
console.log(await titleLocator.textContent());
await expect(titleLocator).toBeVisible();

    });

