import { test, expect, chromium } from "@playwright/test"


test("Pratice handle new tabs", async () => {

    test.setTimeout(3000);

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const parentPage = await context.newPage();

    await parentPage.goto("https://testautomationpractice.blogspot.com/");


    const [childPage] = await Promise.all([
        context.waitForEvent('page'),
        parentPage.click("//button[.='New Tab']")
    ]);
    const totalPages = context.pages();
    console.log("The Total No of pages present===>", totalPages.length);

    await childPage.waitForLoadState();
    console.log("The Parent page title is===>" + await parentPage.title());
    console.log("The child page URL is===>" + await childPage.title());
    await browser.close();

});