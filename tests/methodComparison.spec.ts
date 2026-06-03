import { test, expect, Locator } from "@playwright/test"


test("Method Comparsion", async ({ page }) => {

    await page.goto("https://www.oppo.com/in/");
    await page.locator("//a[.='Smartphones']").click();
    //p[@font-weight='book']


    const allElement: Locator = page.locator(".prd-title");

    const elemantcount: number = await allElement.count();
    console.log("The Total count of smart phones are ::" + elemantcount);


    // innertext 

    // const it = await allElement.nth(9).innerText();
    // console.log("The Text content are::" + it)
    // await page.waitForTimeout(3456);


    // Textcontent 


    // const tc = await allElement.nth(4).textContent();
    // console.log("The Text content are::" + tc)

    // for (let index = 0; index < elemantcount; index++) {

    //     const text = await allElement.nth(index).textContent();
    //     console.log("This is " + index+"  Text content==>" + text)
    // }



    // allinnnertext , all


    // const ait: string[] = await allElement.allInnerTexts();

    // console.log("This is a AllInnerText ==> " + ait)

    // alltextcontent
    // const atc: string[] = await allElement.allTextContents();

    // console.log("This is a AllTextContent ==> " + atc)

    //all
    const alltext: Locator[] = await allElement.all();


    for (let i = 0; i < elemantcount; i++) {

        const text = await alltext[i].innerText();
        console.log("This is a AllText==> " + text);
    }



});