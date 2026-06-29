import { test, expect, Locator } from "@playwright/test"


//Simple Alert Handling

test("Pratice Dialog Handler", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    
    page.once("dialog", async (dialog) => {
        console.log("The Dialog type is ==>" + dialog.type());
        expect(dialog.type()).toContain("alert");
        console.log("The Dialog message is ==>" + dialog.message());
        expect(dialog.message()).toContain("I am an alert box!");
        await dialog.accept();
    });
    await page.locator("//button[@id='alertBtn']").click();
    await page.waitForTimeout(2567);
})


//Confirm Alert Handling

test("Verify confirmation Dialog box", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    page.once("dialog", async (dialog) => {
        expect(dialog.message()).toContain("Press a button!");
        await dialog.accept();
    });
    await page.locator("#confirmBtn").click();
    const dialogText = await page.locator("#demo").innerText();
    expect(dialogText).toContain("You pressed OK!");

    page.once("dialog", async (dialog) => {
        expect(dialog.message()).toContain("Press a button!");
        await dialog.dismiss();
    });
    await page.locator("#confirmBtn").click();
    const dialogText2 = await page.locator("#demo").innerText();
    expect(dialogText2).toContain("You pressed Cancel!");

    await page.waitForTimeout(3456);
});


//Prompt Alert Handling

test("Verify the prompt dialog Handler", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    page.once('dialog', async (dialog) => {

        console.log("The Dialog type is===>" + dialog.type());
        console.log("The Dialog Message is===>" + dialog.message());

        expect(dialog.type()).toBe("prompt");
        expect(dialog.message()).toContain("Please enter your name:");
        expect(dialog.defaultValue()).toContain("Harry Potter");

        await dialog.accept("Gok's");
    });

    await page.locator("//button[@id='promptBtn']").click();
    const value = await page.locator("#demo").innerText();
    expect(value).toBe("Hello Gok's! How are you today?");

    console.log("The Messageinput is===>" + value);
    await page.waitForTimeout(3456);

});
