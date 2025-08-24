import { test, expect } from '@playwright/test';
import loginPage from '../pages/loginPage';
import productsPage from '../pages/productsPage';
import cartPage from '../pages/cartPage';
import { getEnvConfig } from '../utils/env.config';
test.describe.configure({ mode: 'parallel', retries: 5 });
const env = process.env.ENV || 'dev';
const config = getEnvConfig(env);
const login = new loginPage();
const products = new productsPage();
const cart = new cartPage();

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
    await page.waitForTimeout(5000);
    await products.clickOnCartBadgeIcon(page);
    await cart.clickOnCheckoutButton(page);
  });
});
