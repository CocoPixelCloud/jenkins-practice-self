import { test } from "@playwright/test";

test("Google test", async ({ page }) => {
  // navigate to https://www.google.com
  await page.goto("https://www.google.com/");

  let searchBox = page.locator("textarea[id='APjFqb']");
  //await searchBox.type("Cydeo");

  await searchBox.fill("Cydeo");
  await searchBox.press("Enter");
});














