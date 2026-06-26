import { test, Locator } from "@playwright/test"


test("Auto suggestion Drop down", async ({ page }) => {


    await page.goto("https://www.google.com/")
    const input: Locator = page.locator("#APjFqb");
    await input.fill("Smart");

    await page.waitForTimeout(2567);

    const List: Locator = page.locator("//div[@role='presentation']/ul/li");
    await page.waitForTimeout(2567);

    const optioncount = await List.count();
    console.log("The total options are ::", optioncount);

    console.log(" The 5 content is ", await List.nth(5).innerText());


    for (let index = 0; index < optioncount; index++) {
        console.log("The " + index + " Auto suggestion  is :: " + await List.nth(index).innerText());

    }

});