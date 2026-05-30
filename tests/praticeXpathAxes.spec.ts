import { test, expect, Locator } from "@playwright/test";


test("Practice Xpath in Playwright", async ({ page }) => {
    // Maximize browser window in Playwright: set viewport to the screen's available size
    const screenSize = await page.evaluate(() => ({ width: window.screen.availWidth, height: window.screen.availHeight }));
    await page.setViewportSize({ width: screenSize.width, height: screenSize.height });

    await page.goto("https://www.w3schools.com/html/html_tables.asp");

    //Self Xpath
    const mexicoCell: Locator = page.locator("//td[.='Mexico']//self::td");
    await expect(mexicoCell).toBeVisible();

    //parent Xpath
    const mexicoRow: Locator = page.locator("//td[.='Mexico']//parent::tr");
    await expect(mexicoRow).toBeVisible();
    // await expect(mexicoRow).toHaveCount(1);
    console.log("Count of parent elements: " + await mexicoRow.count());
    console.log("Text of parent element: " + await mexicoRow.textContent());
    expect(await mexicoRow.textContent()).toContain("Mexico");

    //child Xpath
    const childCells: Locator = page.locator("//table[@id='customers']//tr[1]/child::th");
    await expect(childCells.first()).toBeVisible();

    expect(await childCells.count()).toBe(3);

    console.log("Count of child elements: " + await childCells.count());
    const headers = await childCells.allTextContents();
    console.log("Header texts:", headers.map(h => h.trim()));
    expect(headers.map(h => h.trim())[0]).toBe("Company");


    //ancestral Xpath
    const ancestorTable: Locator = page.locator("//td[.='UK']/ancestor::table");
    await expect(ancestorTable).toBeVisible();
    expect(await ancestorTable.getAttribute("id")).toBe("customers");

    //Descendant Xpath
    const descendantCells: Locator = page.locator("//table[@id='customers']//descendant::td");
    const descendantCount = await descendantCells.count();
    expect(descendantCount).toBeGreaterThan(0);

    const descendantTexts = await descendantCells.allTextContents();
    expect(descendantTexts.some(text => /Germany|Mexico|UK/.test(text))).toBeTruthy();

    console.log("Count of descendant elements: " + descendantCount);
    console.log("Text of descendant elements: " + descendantTexts);

    //following Xpath
    const followingCells: Locator = page.locator("//td[.='Mexico']/following::td");
    await expect(followingCells.first()).toBeVisible();
    const followingCount = await followingCells.count();

    //following-sibling Xpath
    const followingSiblingCells: Locator = page.locator("//td[.='Francisco Chang']/following-sibling::td");
    const followingSiblingCount = await followingSiblingCells.count();
    console.log("Count of following-sibling elements: " + followingSiblingCount);
    if (followingSiblingCount > 0) {
        await expect(followingSiblingCells.first()).toBeVisible();
    }  

    //preceding Xpath
    const precedingCells: Locator = page.locator("//td[.='Mexico']/preceding::td");
    const precedingCount = await precedingCells.count();
    console.log("Count of preceding elements: " + precedingCount);

    //preceding-sibling Xpath
    const precedingSiblingCells: Locator = page.locator(" ");
    const precedingSiblingCount = await precedingSiblingCells.count();
    console.log("Count of preceding-sibling elements: " + precedingSiblingCount);
});
