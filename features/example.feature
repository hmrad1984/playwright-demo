Feature: Playwright homepage

    Scenario: Visit the homepage and check the title
        Given I navigate to "https://playwright.dev/"
        Then the page title should contain "Playwright"
