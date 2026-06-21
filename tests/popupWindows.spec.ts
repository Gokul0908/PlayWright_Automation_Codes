import { test, chromium, expect } from "@playwright/test";



test("Pratice popup windows handles", async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://testautomationpractice.blogspot.com/");

    await Promise.all([page.waitForEvent('popup'), await page.locator("#PopUp").click()]);
    console.log("The Total no of pages ", context.pages().length);
    await page.waitForTimeout(2567);

})


test.only("Pratice authanticated popup windows", async ({ }) => {

    const browser = await chromium.launch();
    const context = await browser.newContext({ httpCredentials: { username: 'admin', password: 'admin' } }); // another way to pass login credentials
    //const context = await browser.newContext();
    const page = await context.newPage();


    //  https://username:password@the-internet.herokuapp.com/basic_auth

    await page.goto("https://the-internet.herokuapp.com/basic_auth");

    await page.waitForTimeout(2567);
    const text = await page.locator("//p").innerText();
    console.log("The Text is ===>" + text);

    expect(text).toContain("Congratulations!")
});
