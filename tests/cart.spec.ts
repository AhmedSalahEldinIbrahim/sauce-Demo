import { test, expect } from '../baseTest';
import testData from '../testData.json';
import { getEnvConfig } from '../utils/env.config';
test.describe.configure({ mode: 'parallel', retries: 5 });
const env = process.env.ENV || 'dev';
const config = getEnvConfig(env);
test.describe('cart Page Scenarios', () => {
  test('[regression] check Total Item Count And Individual Price', async ({
    loginPage,
    productPage,
    cartPage,
  }) => {
    await loginPage.loginToHomePageWithValidCredentials(
      config.URL,
      config.USERNAME,
      config.PASSWORD
    );
    await productPage.sortByPriceLowToHigh();
    await productPage.clickOnAddtocart();
    await productPage.clickOnCartBadgeIcon();
    const quantity = await cartPage.validateItemQuantity();
    const getQuantityText = await quantity.allTextContents();
    console.log('Quantity', getQuantityText);
    expect(quantity).toHaveText([testData.FIRSTITEMQUANTITY, testData.SECONDITEMQUANTITY]);
    const Prices = await cartPage.validateItemPrice();
    const getPriceText = await cartPage.validateItemPrice().allTextContents();
    console.log('Price', getPriceText);
    expect(Prices).toHaveText([testData.FIRSTITEMPRICE, testData.SECONDITEMPRICE]);
  });
  test('[smoke] navigate To The CheckoutPage', async ({ loginPage, productPage, cartPage }) => {
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
