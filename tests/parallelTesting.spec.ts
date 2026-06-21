import { test } from "@playwright/test"


// test.describe.configure({ mode: 'serial' })
// test.describe.configure({ mode: 'parallel' })


test.describe("Group1", async () => {


    test("Group 1", async () => {

        console.log("Test 1");
    });
    test("Group 2", async () => {

        console.log("Test 2");
    });
    test("Group 3", async () => {

        console.log("Test 3");
    });
    test("Group 4", async () => {

        console.log("Test 4");
    });
    test("Group 5", async () => {

        console.log("Test 5");
    });



});