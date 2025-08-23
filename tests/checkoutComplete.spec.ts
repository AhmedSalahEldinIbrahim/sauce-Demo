import { test, expect } from '@playwright/test';
import loginPage from '../pages/loginPage';
import productsPage from '../pages/productsPage';
import cartPage from '../pages/cartPage';
import checkoutPage from '../pages/checkoutPage';
import checkoutOverViewPage from '../pages/checkoutOverViewPage';
import checkoutCompletePage from '../pages/checkoutCompletePage';
import { getEnvConfig } from '../utils/env.config';
test.describe.configure({ mode: 'parallel' });
const env = process.env.ENV || 'dev';
const config = getEnvConfig(env);
const login = new loginPage();
const products = new productsPage();
const cart = new cartPage();
const checkout = new checkoutPage();
const checkoutOverView = new checkoutOverViewPage();
const checkoutComplete = new checkoutCompletePage();
test.describe('checkout Complete Page Scenarios', () => {
  test('[smoke] SuccessfulMessageAppeared', async ({ page }) => {
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
    await checkoutOverView.clickOnFinishButton(page);
    await expect(checkoutComplete.getsuccessfulMessage(page)).toBeVisible();
  });
});
