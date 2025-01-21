import { test } from "@playwright/test";

test("@env-test", async ({ page }) => {
  // Your test steps go here

//console.log(process.env.PRACTICE_USERNAME);

//console.log(process.env.PRACTICE_PASSWORD);


console.log(`Username is: ${process.env.PRACTICE_USERNAME}`);

console.log(`Password is: ${process.env.PRACTICE_PASSWORD}`);


});

test("Bypass the authentification by encoding the credentials base64 format", async ({
  page,
}) => {
  // Your test steps go here

  // encoding the credentials base64 format
  let encodedCredential = Buffer.from(
    `${process.env.PRACTICE_USERNAME}:${process.env.PRACTICE_PASSWORD}`
  ).toString("base64");

  await page.setExtraHTTPHeaders({ Authorization: `Basic ${encodedCredential}`,
  });

  await page.goto("https://practice.cydeo.com/basic_auth");

  await page.waitForTimeout(2000);
});