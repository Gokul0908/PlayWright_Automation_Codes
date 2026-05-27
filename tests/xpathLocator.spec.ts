import { test, expect, Locator} from '@playwright/test';

test("Verifying locators in Playwright", async ({ page }) => {
    await page.goto('https://www.flipkart.com/');
await page.locator("//span[@class='b3wTlE']").click();
    await page.locator("(//input[@type='text'])[1]").fill("Watch");
    await page.keyboard.press("Enter");
    //absolute xpath
    const absolute: Locator = page.locator("xpath=/html/body/div/div/div[3]/div[1]/div[2]/div[2]/div/div[1]/div/a/div[1]/div/div");
    await expect(absolute).toBeVisible();

    //relative xpath
    const relative: Locator = page.locator("//a[.='GODFATHER Square Chrono Look Gold Dial Date Working Bla...']");
    await expect(relative).toBeVisible();

    //xpath with contains
    const Watches: number = await page.locator("//a[contains(@href,'black')]").count();
    console.log("Count of elements with href containing 'black': " + Watches);

    //xpath with starts-with
    const startsWith: Locator = page.locator("xpath=//a[starts-with(@href,'/godfather-square-chrono-look-gold-dial-date-working-blac')]");
    await expect(startsWith).toBeVisible();
    //xpath with text()
    const textLocator: Locator = page.locator("xpath=//a[text()='GODFATHER Square Chrono Look Gold Dial Date Working Bla...']");
    await expect(textLocator).toBeVisible();
    //xpath with and
    const andLocator: Locator = page.locator("xpath=//a[contains(@href,'black') and contains(@title,'GODFATHER Square Chrono Look Gold Dial Date Working Bla...')]");
    await expect(andLocator).toBeVisible();
    //xpath with or
    const orLocator: Locator = page.locator("xpath=//a[contains(@href,'black') or contains(@title,'GODFATHER Square Chrono Look Gold Dial Date Working Bla...')]");
    await expect(orLocator).toBeVisible();
    //xpath with index
    const indexLocator: Locator = page.locator("xpath=(//a[contains(@href,'black')])[1]");
    await expect(indexLocator).toBeVisible();
    //xpath with parent-child
    const parentChildLocator: Locator = page.locator("xpath=//div[@class='_1AtVbE col-12-12']//a[contains(@href,'black')]");
    await expect(parentChildLocator).toBeVisible();
    //xpath with sibling
    const siblingLocator: Locator = page.locator("xpath=//a[contains(@href,'black')]/following-sibling::div//a[contains(@href,'black')]");
    await expect(siblingLocator).toBeVisible();
    //xpath with ancestor
    const ancestorLocator: Locator = page.locator("xpath=//a[contains(@href,'black')]/ancestor::div[@class='_1AtVbE col-12-12']");
    await expect(ancestorLocator).toBeVisible();
    //xpath with descendant
    const descendantLocator: Locator = page.locator("xpath=//div[@class='_1AtVbE col-12-12']//descendant::a[contains(@href,'black')]");
    await expect(descendantLocator).toBeVisible();
    //xpath with union
    const unionLocator: Locator = page.locator("xpath=//a[contains(@href,'black')] | //a[contains(@href,'blue')]");
    await expect(unionLocator).toBeVisible();
        //xpath with not
    const notLocator: Locator = page.locator("xpath=//a[contains(@href,'black') and not(contains(@href,'blue'))]");
    await expect(notLocator).toBeVisible();
    //xpath with position
    const positionLocator: Locator = page.locator("xpath=(//a[contains(@href,'black')])[position()=1]");
    await expect(positionLocator).toBeVisible();

    //xpath with last
    const lastLocator: Locator = page.locator("xpath=(//a[contains(@href,'black')])[last()]");
    await expect(lastLocator).toBeVisible();
        //xpath with count
    const count: number = await page.locator("xpath=//a[contains(@href,'black')]").count();
    console.log("Count of elements with href containing 'black': " + count);

    //xpath with length function
    const length: number = await page.locator("xpath=//a[contains(@href,'black')]").evaluateAll(elements => elements.length);
    console.log("Length of elements with href containing 'black': " + length);

    //xpath with string function
    const string: string = await page.locator("xpath=//a[contains(@href,'black')]").evaluateAll(elements => elements.map(element => element.textContent).join(', '));
    console.log("Text content of elements with href containing 'black': " + string);    

    //xpath with number function
    const number: number = await page.locator("xpath=//a[contains(@href,'black')]").evaluateAll(elements => elements.length);   
    console.log("Number of elements with href containing 'black': " + number);

    //xpath with boolean function
    const boolean: boolean = await page.locator("xpath=//a[contains(@href,'black')]").evaluateAll(elements => elements.length > 0);   
    console.log("Are there any elements with href containing 'black'? " + boolean);

    //xpath with date function
    const date: Date = await page.locator("xpath=//a[contains(@href,'black')]").evaluateAll(elements => new Date());
    console.log("Current date and time: " + date);

    //xpath with math function
    const math: number = await page.locator("xpath=//a[contains(@href,'black')]").evaluateAll(elements => Math.random());
    console.log("Random number between 0 and 1: " + math);

    //xpath with user-defined function
    const userDefined: string = await page.locator("xpath=//a[contains(@href,'black')]").evaluateAll(elements => {
        function customFunction(text: string): string {
            return text.toUpperCase();
        }
        return elements.map(element => customFunction(element.textContent)).join(', ');
    });

    //xpath with namespace
    const namespaceLocator: Locator = page.locator("xpath=//a[contains(@href,'black') and namespace-uri()='http://www.w3.org/1999/xhtml']");
    await expect(namespaceLocator).toBeVisible();

    //dynamic xpath
    const dynamicLocator: Locator = page.locator("xpath=//a[contains(@href,'black') and contains(text(),'GODFATHER')]");
    await expect(dynamicLocator).toBeVisible();
    

});