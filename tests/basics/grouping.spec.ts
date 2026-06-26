import { test } from "@playwright/test"

test.describe("Group1", async () => {


    test("Group 1A", async () => {

        console.log("Test 1");
    });
    test("Group 1B", async () => {

        console.log("Test 2");
    });


});


test.describe("Group2", async () => {


    test("Group 2A", async () => {

        console.log("Test 3");
    });
    test("Group 2B", async () => {

        console.log("Test 4");
    });


});