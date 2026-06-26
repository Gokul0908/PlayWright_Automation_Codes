import { test, expect } from "@playwright/test";
import { Locator } from "@playwright/test";

test("Practice Single Selector Dropdown", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    // prefer accessible selector and assert visibility
    const country: Locator = page.locator("#country");
    await expect(country).toBeVisible({ timeout: 5000 });

    // select by visible label, value, and index
    await country.selectOption({ label: "Australia" });
    await country.selectOption({ value: "japan" });
    await country.selectOption({ index: 5 });


    const countryOptions: Locator = page.locator("#country>option");
    const optionsCount: number = await countryOptions.count();
    expect(optionsCount).toBe(10);
    console.log("Total options in the dropdown: " + optionsCount);

    const optionTexts: String[] = (await countryOptions.allTextContents()).map(text => text.trim());
    console.log("Options in the dropdown: " + optionTexts);
    expect(optionTexts).toContain("Australia");
});


test("Multi select dropdown", async ({ page }) => {


    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator("#colors").selectOption(['Blue', 'Green', 'yellow']); // Select by Visible text
    await page.locator("#colors").selectOption(['red', 'green', 'red']);// Select by value text
    await page.locator("#colors").selectOption([{ label: 'Blue' }, { label: 'Green' }]); // Select by label text
    await page.locator("#colors").selectOption([{ index: 0 }, { index: 3 }]); // Select by index text

    await page.waitForTimeout(2000);


    const alloptions: Locator = page.locator("#colors>option");

    expect(alloptions).toHaveCount(7);

    const optioncolor: string[] = (await (alloptions.allTextContents())).map(text => text.trim());

    const originalList:string[]=optioncolor;
    const sortedList: string[] = optioncolor.sort();

    console.log(sortedList)

    console.log("the Total color option are ::" + optioncolor)

    for (const option of optioncolor) {

        console.log(option)
    }

});


test("Verify the dropdown duplicate present or not", async ({ page }) => {


    await page.goto("https://testautomationpractice.blogspot.com/");

    const coloroption: Locator = page.locator("#colors>option");

    const trimmedcolor: string[] = (await coloroption.allTextContents()).map(text => text.trim());

    console.log("The colors are::" + trimmedcolor);


    const myset = new Set<string>();
    const duplicates: string[] = [];



    for (const color of trimmedcolor) {

        if (myset.has(color)) {

            duplicates.push(color);

        } else {

            myset.add(color);
        }
    }
    // console.log("Duplicate are::", duplicates)
    // console.log("unique are::", myset)

});