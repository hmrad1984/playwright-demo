// playwright.config.js
// See https://playwright.dev/docs/test-configuration for more information.

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  testDir: './tests',
  timeout: 30000,
  retries: 0,
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
  },
  reporter: [['html', { open: 'never' }]],
};

module.exports = config;
