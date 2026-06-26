import { test, expect, Locator } from "@playwright/test";



test("Checking Hidden Dropdown", async ({ page }) => {


    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator("//input[@name='username']").fill("Admin");
    await page.locator("//input[@name='password']").fill("admin123");
    await page.locator("//button[@type='submit']").click();

    const clickpim: Locator = page.locator("//span[.='PIM']");

    await clickpim.click();

    const arrow: Locator = page.locator("form i");


    await arrow.nth(2).click();

    const listboxcontent: Locator = page.locator("//div[@role='listbox']/div/span");
    await page.waitForTimeout(2567);
    const count = await listboxcontent.count();
    await page.waitForTimeout(2567);
    console.log("The total Option count is ::", count);

    for (let i = 0; i < count; i++) {

        const final = await listboxcontent.nth(i).innerText();
        console.log("The List box content are ::" + final);
        // await page.waitForTimeout(500);
    }
});


