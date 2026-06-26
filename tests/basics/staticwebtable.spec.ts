import { test, expect, Locator } from '@playwright/test';


test("Validate the static web table", async ({ page }) => {


    await page.goto('https://testautomationpractice.blogspot.com/');
    const tableBody = page.locator("table[name='BookTable'] tbody");
    await expect(tableBody).toBeVisible();

    const rows = tableBody.locator('tr');
    const rowCount = await rows.count();
    console.log("Number of rows in the table:" + rowCount);
    expect(rowCount).toBe(7);


    const columnHeaders = rows.locator('th');
    const columnHeaderCount = await columnHeaders.count();
    expect(columnHeaderCount).toBe(4);
    console.log("Number of columns in the table======> " + columnHeaderCount);

    const fifthRowText: string = await rows.nth(4).innerText();
    console.log("Text of the 5th row: " + fifthRowText);

    // for (let i = 0; i < rowCount; i++) {

    //     const alltext: string = await rows.nth(i).innerText();
    //     console.log("The " + i + " row text is===>: " + alltext);
    // }

    const allData: Locator[] = await rows.all();


    // console.log(allData);
    // for (let rows of allData) {

    //     const alltext = await rows.locator('td').allInnerTexts();
    //     console.log(alltext);

    // }

    //print the book name which have same author


    const mukeshBooks: string[] = [];

    // for (let rows of allData.slice(1)) {

    //     const cells = await rows.locator('td').allInnerTexts();
    //     const bookName = cells[0];
    //     const author = cells[1];

    //     if (author === "Mukesh") {

    //         const mB: number = mukeshBooks.push(bookName);
    //         // console.log("Book name with author Mukesh: " + `${bookName}`);
    //     }
    // }

    // console.log("The Mukesh Books are ::" + mukeshBooks)

    // expect(mukeshBooks).toHaveLength(2);


    // Total price of all books is 


    let totalPrice: number = 0;
    for (let rows of allData.slice(1)) {

        const cells = await rows.locator('td').allInnerTexts();
        const price = cells[3];

        totalPrice = totalPrice + parseInt(price);

    }

    console.log("The Total price of all book is " + totalPrice);

    expect(totalPrice).toBe(7100);

});