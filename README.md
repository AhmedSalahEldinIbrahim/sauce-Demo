# Playwright Test Automation Project

## Overview
This project uses [Playwright](https://playwright.dev/) for end-to-end UI testing across multiple browsers (Chromium, Firefox, and WebKit). It follows the Page Object Model (POM) for better maintainability and scalability.

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (version 16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/<your-repo>.git
   cd <your-repo>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```
3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Running Tests Locally

- Run all tests:
  ```bash
  npx playwright test
  ```
- Run tests in headed mode:
  ```bash
  npx playwright test --headed
  ```
- Run tests in a specific browser:
  ```bash
  npx playwright test --project=chromium
  npx playwright test --project=firefox
  npx playwright test --project=webkit
  ```
- Run a specific test file:
  ```bash
  npx playwright test tests/login.spec.ts
  ```
- View the HTML test report:
  ```bash
  npx playwright show-report
  ```

## Running Tests in CI

Example GitHub Actions workflow:
```yaml
name: Playwright Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Install dependencies
        run: npm install
      - name: Install Playwright Browsers
        run: npx playwright install --with-deps
      - name: Run Playwright tests
        run: npx playwright test
```

(Adjust accordingly for GitLab, Jenkins, or other CI/CD platforms.)

## Folder Structure

```
├── tests/                 # Test specs (e.g., login.spec.ts, cart.spec.ts)
├── pages/                 # Page Object classes with selectors and actions
├── utils/                 # Utility/helper functions & test data
├── playwright.config.ts   # Playwright configuration (projects, reporter, etc.)
├── package.json           # Dependencies & scripts
├── README.md              # Project documentation
```

## Tools & Libraries Used
- [Playwright](https://playwright.dev/) – Browser automation & testing
- TypeScript – Static typing
- Playwright Test Runner – Built-in Jest-like assertions
- Optional: ESLint & Prettier for code quality and formatting
- Optional: Allure or HTML reporter for enhanced reporting

## Assumptions & Limitations
- Test data (URLs, credentials) come from `utils` files or environment variables.
- Supports Chromium, Firefox, and WebKit; mobile/API testing requires extra setup.
- Selectors rely on `data-test` attributes; UI changes may require selector updates.
- CI example assumes GitHub Actions; syntax varies for other CI/CD tools.

## Contribution Guidelines
- Follow the Page Object Model pattern.
- Keep selectors inside page classes, not directly in test files.
- Update README if tools, commands, or structure change.
