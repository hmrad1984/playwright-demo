Feature: Page title checks for multiple URLs

    Scenario Outline: Check that the page title includes expected text
        Given I navigate to "<url>"
        Then the page title should contain "<expectedTitle>"

        Examples:
            | url                    | expectedTitle |
            | https://playwright.dev | Playwright    |
            | https://example.com    | Example       |
