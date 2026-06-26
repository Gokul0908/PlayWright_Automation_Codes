import { test, Locator, expect } from "@playwright/test"

test("Pratice Screenshots", async ({ page }) => {

    await page.goto("https://www.flipkart.com/");

    const timestamp = Date.now();

    //screen size page
    await page.screenshot({ path: 'screenshots/shot' + timestamp + '.png' });

    //For full screen 

    await page.screenshot({ path: 'screenshots/shot' + timestamp + '.png', fullPage: true });

    // for Particular element 
    const e1: string = "(//div[@class='_3n8fna1co _3n8fna10j _3n8fnaod _3n8fna1 _3n8fnac7 _1i2djtb9 _1i2djt0 _1i2djt90 _1i2djt6r _1i2djt29 _1i2djt4i'])[1]";

    await page.locator(e1).screenshot({ path: 'screenshots/shot' + timestamp + '.png' });

});



//checking failure screenshot in config file
test("Practice Actions", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const textbox: Locator = page.locator("#name");
    await textbox.fill("Goks");

    await textbox.isVisible();
    console.log("The Value is: " + await textbox.inputValue());

    expect(await textbox.inputValue()).toBe('Goks');
    await page.waitForTimeout(2000);

    const maleRadio = page.locator("#male234");
    await maleRadio.isVisible();

    expect(await maleRadio.isChecked()).toBe(false);
    await maleRadio.check();
    expect(await maleRadio.isChecked()).toBe(true);
    await page.waitForTimeout(2000);
});
