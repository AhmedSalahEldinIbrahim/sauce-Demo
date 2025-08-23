import { test, expect } from '@playwright/test';
import loginPage from '../pages/loginPage';
import productsPage from '../pages/productsPage';
import { getEnvConfig } from '../utils/env.config';
test.describe.configure({ mode: 'parallel' });
const env = process.env.ENV || 'dev';
const config = getEnvConfig(env);
const login = new loginPage();
const products = new productsPage();

test.describe('products Page Scenarios', () => {
  test('[regression] sort Products By Price (Low To High)', async ({ page }) => {
    await login.loginToHomePageWithValidCredentials(
      page,
      config.URL,
      config.USERNAME,
      config.PASSWORD
    );
    await products.sortByPriceLowToHigh(page);
  });
  test('[smoke] add The Two Cheapest Items To The Cart', async ({ page }) => {
    await login.loginToHomePageWithValidCredentials(
      page,
      config.URL,
      config.USERNAME,
      config.PASSWORD
    );
    await products.sortByPriceLowToHigh(page);
    await products.clickOnAddtocart(page);
  });
  test('[regression] validate The Correct Items (Name And Price) Are Added', async ({ page }) => {
    await login.loginToHomePageWithValidCredentials(
      page,
      config.URL,
      config.USERNAME,
      config.PASSWORD
    );
    await products.sortByPriceLowToHigh(page);
    await products.clickOnAddtocart(page);
    for (let i = 0; i < 2; i++) {
      await expect(products.valiateItemsAreAdded(i, page)).toBeVisible();
    }
  });

  test('[smoke] navigate To The Cart', async ({ page }) => {
    await login.loginToHomePageWithValidCredentials(
      page,
      config.URL,
      config.USERNAME,
      config.PASSWORD
    );
    await products.sortByPriceLowToHigh(page);
    await products.clickOnAddtocart(page);
    await products.clickOnCartBadgeIcon(page);
  });
});
