const { Given, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('I open the Playwright website', async function () {
  await this.page.goto('https://playwright.dev/');
});

Then('I should see the title containing {string}', async function (titlePart) {
  const title = await this.page.title();
  expect(title).toContain(titlePart);
});
