// tests/basicNavigation.spec.js
const { test, expect } = require('@playwright/test');

test('homepage has expected title', async ({ page }) => {
  await page.goto('https://play1.automationcamp.ir/login.html');
  await expect(page).toHaveTitle(/Login/);
});


test('element interaction test', async ({ page }) => { 
    await page.goto('https://play1.automationcamp.ir/login.html');
    const button = page.locator('#login');
    await button.click();
    await expect(page).toHaveTitle(/Login/);
});