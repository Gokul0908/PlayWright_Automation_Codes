import { test, expect, Locator } from '@playwright/test';

test("Practice Actions", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const textbox: Locator = page.locator("#name");
    await textbox.fill("Goks");

    await textbox.isVisible();
    console.log("The Value is: " + await textbox.inputValue());

    expect(await textbox.inputValue()).toBe('Goks');
    await page.waitForTimeout(2000);

});

test("Practice Radio Actions", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const maleRadio = page.locator("#male");
    await maleRadio.isVisible();

    expect(await maleRadio.isChecked()).toBe(false);
    await maleRadio.check();
    expect(await maleRadio.isChecked()).toBe(true);
    await page.waitForTimeout(2000);
});


test("Practice Check Boxes Actions", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const wednesdayCheckBox: Locator = page.getByLabel("Wednesday");
    // await wednesdayCheckBox.check();
    // await page.waitForTimeout(2000);


    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    // for (const day of daysOfWeek) {
    //     const checkBox = page.getByLabel(day);
    //     await checkBox.check();
    //     await page.waitForTimeout(500);
    // }

    const days: String[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    for (let i = 0; i < daysOfWeek.length; i++) {
        const checkBox = page.getByLabel(daysOfWeek[i]);
        await checkBox.check();
        await page.waitForTimeout(500);
    }


    for (const day of daysOfWeek.slice(-3)) {
        const checkBox = page.getByLabel(day);
        await checkBox.uncheck();
        await page.waitForTimeout(500);
    }

    for (const day of daysOfWeek) {
        const checkBox = page.getByLabel(day);

        if (await checkBox.isChecked()) {
            await checkBox.uncheck();
        }
        else {
            await checkBox.check();
        }
        await page.waitForTimeout(500);

    }

});
