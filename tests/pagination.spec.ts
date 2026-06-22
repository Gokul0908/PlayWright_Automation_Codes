// Run with: npx playwright test pagination.spec.ts
import { test, expect, Locator } from "@playwright/test";

test("Pagination Automation", async ({ page }) => {



    await page.goto("https://practice.expandtesting.com/dynamic-pagination-table")

    let hasPage = true;

    while (hasPage) {


        const Table = await page.locator("#example tbody tr").all();

        for (let data of Table) {

            const datas = await data.innerText();

            console.log("The Datas are ::" + datas)

            await page.waitForTimeout(2000);


            const nextButton: Locator = page.locator("#example_next");
            const classAtt = await nextButton.getAttribute("class");

            if (classAtt?.includes("disabled")) {

                hasPage = false;

            } else {
                await nextButton.click();

            }

        }

    }
});



test("Verifying the dropDown", async ({ page }) => {


    await page.goto("https://practice.expandtesting.com/dynamic-pagination-table");
    const dropDown = page.locator(".form-select");
    await dropDown.selectOption({ label: '5' });
    const Table = page.locator("#example tbody tr");
    await expect(Table).toHaveCount(5);

    await page.waitForTimeout(2567);
});

test("Verifying the value", async ({ page }) => {

    await page.goto("https://practice.expandtesting.com/dynamic-pagination-table");
    await page.locator("//input[@type='search']").fill("Florida");
    const Table = await page.locator("#example tbody tr").all();
    console.log("The Length is==>" + Table.length);


    if (Table.length >= 2) {

        const innercount = await page.locator("#example tbody tr td").count();

        console.log(innercount);
        const innervalue = await page.locator("#example tbody tr td").allInnerTexts();

        console.log(innervalue);
        expect(innervalue).toContain("Florida");

    } else {

        console.log("No Rows Found");
    }


});