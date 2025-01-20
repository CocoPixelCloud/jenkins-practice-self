import {test} from "@playwright/test";

test.describe("", () => {

    test.beforeAll(async () => {
        console.log("Before all test cases");
    });

    test.afterAll(async () => {
        console.log("After all test cases");
    });
    
    test.beforeEach(async ({page}) => {
        console.log("Before each test case");
    });

    test.afterEach(async ({page}) => {
        console.log("After each test case");
    });
    test("test case 1", async() => {

        console.log("test case 1 executed");
    })

    test("test case 2", async () => {

        console.log("test case 2 executed");
    });

    test("test case 3", async () => {
      console.log("test case 3 executed");
    });

})



