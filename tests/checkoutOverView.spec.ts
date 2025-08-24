import { test, expect } from '@playwright/test';
import loginPage from '../pages/loginPage';
import productsPage from '../pages/productsPage';
import cartPage from '../pages/cartPage';
import checkoutPage from '../pages/checkoutPage';
import checkoutOverViewPage from '../pages/checkoutOverViewPage';
import testData from '../testData.json';
import { getEnvConfig } from '../utils/env.config';
test.describe.configure({ mode: 'parallel', retries: 5 });
const env = process.env.ENV || 'dev';
const config = getEnvConfig(env);
const login = new loginPage();
const products = new productsPage();
const cart = new cartPage();
const checkout = new checkoutPage();
const checkoutOverView = new checkoutOverViewPage();

test.describe('checkout OverView Page Scenarios', () => {
  test('[regression] check the tax Click On Continue Button', async ({ page }) => {
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
    await expect(checkoutOverView.getTotalCalculation(page)).toContainText(testData.TOTALTAX);
    // await page.waitForTimeout(3000);
  });
  test('[smoke] complete The Order', async ({ page }) => {
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
  });
});
