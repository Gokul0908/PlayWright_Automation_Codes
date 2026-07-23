import { test, expect, chromium } from '@playwright/test';

test("Window Handle - Extract All Pages", async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const parentPage = await context.newPage();

    await parentPage.goto('https://testautomationpractice.blogspot.com/');

    const [newPage] = await Promise.all([
        parentPage.waitForEvent('popup'),
        parentPage.click('#PopUp'),
    ]);

    await newPage.waitForLoadState('load');

    const allPages = parentPage.context().pages();
    console.log(`Total pages: ${allPages.length}`);

    for (const p of allPages) {

        const URL = p.url();
        const TITLE = await p.title();

        // console.log(`The page if url is==>${URL}`);
        // console.log
        // console.log("The Current Page URL is ===> : " + URL);
        // console.log("The Current Page Title is==> : " + TITLE);
    }

    const secondPopup = allPages[2];
    // await secondPopup.waitForLoadState('domcontentloaded');

    await secondPopup.locator('.getStarted_Sjon').click();
});