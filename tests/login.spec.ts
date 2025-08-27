import { test, expect } from '../baseTest';
import { getEnvConfig } from '../utils/env.config';
const env = process.env.ENV || 'dev';
const config = getEnvConfig(env);
test.describe.configure({ mode: 'parallel', retries: 5 });
test.describe('login Page Scenarios ', () => {
  test('[smoke] login To Home Page With Valid Credentials', async ({ loginPage }) => {
    await loginPage.loginToHomePageWithValidCredentials(
      config.URL,
      config.USERNAME,
      config.PASSWORD
    );
    const ProductsPageTitle = loginPage.getProductsPageTitle();
    await expect(ProductsPageTitle).toBeVisible();
  });

  test('[regression] login To Home Page With InValid Credentials', async ({ loginPage }) => {
    await loginPage.loginToHomePageWithValidCredentials(
      config.URL,
      config.USERNAME,
      config.INVALIDPASSWORD
    );
    const errorMessage = loginPage.getErrorMessage();
    await expect(errorMessage).toBeVisible();
  });
});
