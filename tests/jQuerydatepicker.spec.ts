import { test, expect, Locator, Page } from "@playwright/test"

async function datePicker(Date: string, Month: string, Year: string, page: Page, IsFuture: boolean) {

    while (true) {

        const currentMonth = await page.locator(".ui-datepicker-month").innerText();
        const currentyear = await page.locator(".ui-datepicker-year").innerText();


        console.log("The Current Month is====>" + currentMonth);
        console.log("The Current Year is====>" + currentyear);
        if (currentMonth === Month && currentyear === Year) {
            break;

        }

        if (IsFuture) {
            await page.locator(".ui-datepicker-next").click();
            // await page.waitForTimeout(500);
        } else {

            await page.locator(".ui-datepicker-prev").click();
            // await page.waitForTimeout(500);
        }
    }

    const allDates = await page.locator(".ui-datepicker tbody  td").all();


    // console.log("The Dates are ==>" + allDates)

    for (let dt of allDates) {

        const excatDate = await dt.innerText();

        console.log("The Exact Date is ==>" + excatDate);
        if (excatDate === Date) {
            await dt.click();
            break;
        }
    }
    await page.waitForTimeout(7000);


}

test("Pratice JQuery Date Picker", async ({ page }) => {


    await page.goto("https://testautomationpractice.blogspot.com/")
    const dateInput: Locator = page.locator("//input[@id='datepicker']");
    const Date = '9';
    const month = 'August';
    const year = '2025'

    await dateInput.click();

    await datePicker(Date, month, year, page, false)
})



test.only("Select dropdown Date Picker", async ({ page }) => {


    await page.goto("https://testautomationpractice.blogspot.com/")
    const input = page.locator("//input[@id='txtDate']");
    await input.click();

    const Date = '29';
    const Month = 'Jan'
    const Year = '2026'

    const selectMonth = page.locator(".ui-datepicker-month");
    const selectyear = page.locator(".ui-datepicker-year");

    selectMonth.selectOption({ label: Month })
    await page.waitForTimeout(500);
    selectyear.selectOption({ label: Year })
    await page.waitForTimeout(500);


    const allDates: Locator[] = await page.locator(".ui-datepicker-calendar tbody tr td").all();

    for (let date of allDates) {
        const exactDate = await date.innerText();

        if (exactDate === Date) {
            await date.click();
            break;
        }
    }
    await page.waitForTimeout(5000);
})