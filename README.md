# Playwright + Cucumber Hands-On Project

This repository is a hands-on project to practice end-to-end testing using [Playwright](https://playwright.dev/) and [Cucumber.js](https://github.com/cucumber/cucumber-js). It demonstrates:

- Playwright test automation
- BDD with Cucumber feature files and step definitions
- Custom world setup for Playwright browser context
- HTML reporting

## Project Structure

```
playwright-demo/
├── features/
│   ├── example.feature
│   └── step-definitions/
│       └── example.steps.js
├── tests/
├── support/
│   └── world.js
├── playwright.config.js
├── cucumber.js
├── package.json
├── README.md
```

## Getting Started

1. **Clone the repository:**
   ```
   git clone https://github.com/hmrad1984/playwright-demo.git
   cd playwright-demo
   ```
2. **Install dependencies:**
   ```
   npm install
   ```

## Running Playwright Tests

Run all Playwright tests:

```
npx playwright test
```

View the HTML report:

```
npx playwright show-report
```

## Running Cucumber (BDD) Tests

Run all Cucumber feature tests:

```
npx cucumber-js
```

## Contributing

Feel free to fork this repo and add your own tests, features, or improvements!

---

_This project is for learning and practice purposes only._
