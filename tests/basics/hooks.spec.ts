import { test } from '@playwright/test';



test.beforeAll("Before_All", async () => {


    console.log("====================This is Before_All should execute once==================== ");
})

test.afterAll("After_All", async () => {


    console.log("====================This is After_All should execute once====================");
})

test.beforeEach('Before_Each', async () => {

    console.log("This is Before Each");

})

test.afterEach('After_Each', async () => {

    console.log("This is After Each");

})




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
