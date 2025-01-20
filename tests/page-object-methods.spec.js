import { test } from "@playwright/test";

test("Getting the title of the page", async ({ page }) => {
  // Test body

  await page.goto("https://practice.cydeo.com/");

  //await page.waitForTimeout(2000);

  let actualTitle = await page.title();
  console.log("Title of the page is: " + actualTitle);
});

test("Getting the URL of the page @Test2", async ({ page }) => {
  // Test body

  await page.goto("https://practice.cydeo.com/");

  let actualUrl = page.url();
  console.log("URL of the page is: " + actualUrl);
});

test("Set the window size", async ({ page }) => {
  // Test body

  await page.goto("https://practice.cydeo.com/");
  await page.waitForTimeout(2000);
  await page.setViewportSize({ width: 1300, height: 1080 });
  await page.waitForTimeout(2000);
});
