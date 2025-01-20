
//const {test} = require("playwright/test");

import { test, expect } from '@playwright/test';

test("Simple Google test", async ({page}) => {

    //test code

    await page.goto("https://www.google.com");
    await page.waitForTimeout(3000);

})










