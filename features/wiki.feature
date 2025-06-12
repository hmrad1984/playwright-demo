Feature: Test New Page Titles

    @smoke
    Scenario Outline: Test page titles for various URLs
        Given I navigate to "<url>"
        Then the page title should contain "<expectedTitle>"

        Examples:
            | url                       | expectedTitle |
            | https://www.wikipedia.org | Wikipedia     |
            | https://www.github.com    | GitHub        |
            | https://www.python.org    | Python        |