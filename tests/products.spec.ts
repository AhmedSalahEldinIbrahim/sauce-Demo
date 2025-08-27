import { test, expect } from '../baseTest';
import { getEnvConfig } from '../utils/env.config';
test.describe.configure({ mode: 'parallel', retries: 5 });
const env = process.env.ENV || 'dev';
const config = getEnvConfig(env);

test.describe('products Page Scenarios', () => {
  test('[regression] sort Products By Price (Low To High)', async ({ loginPage, productPage }) => {
    await loginPage.loginToHomePageWithValidCredentials(
      config.URL,
      config.USERNAME,
      config.PASSWORD
    );
    await productPage.sortByPriceLowToHigh();
  });
  test('[smoke] add The Two Cheapest Items To The Cart', async ({ loginPage, productPage }) => {
    await loginPage.loginToHomePageWithValidCredentials(
      config.URL,
      config.USERNAME,
      config.PASSWORD
    );
    await productPage.sortByPriceLowToHigh();
    await productPage.clickOnAddtocart();
  });
  test('[regression] validate The Correct Items (Name And Price) Are Added', async ({
    loginPage,
    productPage,
  }) => {
    await loginPage.loginToHomePageWithValidCredentials(
      config.URL,
      config.USERNAME,
      config.PASSWORD
    );
    await productPage.sortByPriceLowToHigh();
    await productPage.clickOnAddtocart();
    for (let i = 0; i < 2; i++) {
      await expect(productPage.valiateItemsAreAdded(i)).toBeVisible();
    }
  });

  test('[smoke] navigate To The Cart', async ({ loginPage, productPage, cartPage }) => {
    await loginPage.loginToHomePageWithValidCredentials(
      config.URL,
      config.USERNAME,
      config.PASSWORD
    );
    await productPage.sortByPriceLowToHigh();
    await productPage.clickOnAddtocart();
    await productPage.clickOnCartBadgeIcon();
    await cartPage.clickOnCheckoutButton();
  });
});
