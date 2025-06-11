const { setWorldConstructor } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

class CustomWorld {
  async launchBrowser() {
    this.browser = await chromium.launch();
    this.context = await this.browser.newContext();
  }

  async closeBrowser() {
    await this.context.close();
    await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);
