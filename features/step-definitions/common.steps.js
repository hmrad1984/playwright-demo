const { Given, Then, Before, After } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');


Before(async function () {
  await this.launchBrowser();
});

After(async function () {
  await this.closeBrowser();
});

let page;

Given('I navigate to {string}', async function (url) {
  page = await this.context.newPage();
  await page.goto(url);
});

Then('the page title should contain {string}', async function (title) {
  await expect(page).toHaveTitle(new RegExp(title));
});


