import { test } from '@playwright/test';
import loginPage from '../pages/loginPage';
import productsPage from '../pages/productsPage';
import cartPage from '../pages/cartPage';
import checkoutPage from '../pages/checkoutPage';
import { getEnvConfig } from '../utils/env.config';
test.describe.configure({ mode: 'parallel' });
const env = process.env.ENV || 'dev';
const config = getEnvConfig(env);
const login = new loginPage();
const products = new productsPage();
const cart = new cartPage();
const checkout = new checkoutPage();

test.describe('checkout Page Scenarios', () => {
  test('[smoke] enter Your Information Fields', async ({ page }) => {
    await login.loginToHomePageWithValidCredentials(
      page,
      config.URL,
      config.USERNAME,
      config.PASSWORD
    );
    await products.sortByPriceLowToHigh(page);
    await products.clickOnAddtocart(page);
    await products.clickOnCartBadgeIcon(page);
    await cart.clickOnCheckoutButton(page);
    await checkout.enterYourInformationeField(page);
    await page.waitForTimeout(3000);
  });
});
