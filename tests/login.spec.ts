import { test, expect } from '@playwright/test';
import loginPage from '../pages/loginPage';
import { getEnvConfig } from '../utils/env.config';

const env = process.env.ENV || 'dev';
const config = getEnvConfig(env);
const login = new loginPage();
test.describe.configure({ mode: 'parallel' });
test.describe('login Page Scenarios ', () => {
  test('[smoke] login To Home Page With Valid Credentials', async ({ page }) => {
    await login.loginToHomePageWithValidCredentials(
      page,
      config.URL,
      config.USERNAME,
      config.PASSWORD
    );
    const ProductsPageTitle = login.getProductsPageTitle(page);
    await expect(ProductsPageTitle).toBeVisible();
  });

  test('[regression] login To Home Page With InValid Credentials', async ({ page }) => {
    await login.loginToHomePageWithValidCredentials(
      page,
      config.URL,
      config.USERNAME,
      config.INVALIDPASSWORD
    );
    const errorMessage = login.getErrorMessage(page);
    await expect(errorMessage).toBeVisible();
  });
});
