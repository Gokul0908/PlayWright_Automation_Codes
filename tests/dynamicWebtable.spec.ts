import { test, expect, Locator } from "@playwright/test";


test("Checking the Dynamic table values", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    const dynamicTable: Locator = page.locator("#taskTable");
    await expect(dynamicTable).toBeVisible();

    const rows = dynamicTable.locator('tbody tr');
    const rowLength = await rows.count();

    console.log("The Length of total row is " + rowLength);


    //getting the chrome process in  dynamic table
    let CPULoad = '';
    for (let i = 0; i < rowLength; i++) {
        const rowData: string = await rows.nth(i).locator('td').nth(0).innerText();
        console.log("The Row data is " + rowData);

        if (rowData === 'Chrome') {

            // rows.nth(i).locator('td:has-text{"%"}').innerText();
            CPULoad = await rows.nth(i).locator('td', { hasText: '%' }).innerText();
            console.log("CPU load of Chrome process: ====>" + CPULoad);
            break;
        }

        await page.waitForTimeout(10000);
    }
    // compare the cpu process with table and blue label in websites

    const cpuvalue = (await page.locator('strong.chrome-cpu').textContent())?.trim() || '';
    console.log("The CPU Value is =======>" + cpuvalue);
    expect(cpuvalue).toBe(CPULoad);
});




test("Network speed of Chrome process", async ({ page }) => {


    await page.goto("https://testautomationpractice.blogspot.com/");
    const tableBody = page.locator("#taskTable");
    await expect(tableBody).toBeVisible();

    const tableRow = tableBody.locator("tbody tr");
    const countOfRow = await tableRow.count();
    console.log("The Total count of table row is =====>" + countOfRow);

    const rows = tableRow;

    expect(countOfRow).toBe(4);
    const TableData = tableRow.locator('td');
    const countOfTableData = await TableData.count();
    console.log("The count of table data is ========>" + countOfTableData);

    for (let i = 0; i < countOfRow; i++) {
        const processName = await rows.nth(i).locator('td').nth(0).innerText();
        console.log("The process name is ===>" + processName);

        if (processName === 'Chrome') {
            const chromeProcess = await rows.nth(i).locator('td', { hasText: 'Mbps' }).innerText();
            console.log("Network speed of Chrome process: " + chromeProcess);
            break;
        }
    }
    await page.waitForTimeout(5000);
});


// test.only("Memory Size of Firefox process", async ({ page }) => {


//     await page.goto("https://testautomationpractice.blogspot.com/")
//     const table = page.locator("#taskTable");
//     await expect(table).toBeVisible();


//     const row = table.locator("tbody tr");
//     const countOfRow = await row.count()
//     expect(countOfRow).toBe(4);


//     for (let i = 0; i < countOfRow; i++) {

//         const data = await row.nth(i).locator('td').nth(0).innerText();

//         if (data === 'Firefox') {
//             const memorySize = await row.nth(i).locator('td', { hasText: 'MB' }).innerText();

//             console.log("Memory Size is ===>" + memorySize)
//             break;
//         }
//     }
//     await page.waitForTimeout(5000);
// })