import { test, expect } from '@playwright/test';
import loginPage from '../pages/loginPage';
import productsPage from '../pages/productsPage';
import cartPage from '../pages/cartPage';
import testData from '../testData.json';
import { getEnvConfig } from '../utils/env.config';
test.describe.configure({ mode: 'parallel' });
const env = process.env.ENV || 'dev';
const config = getEnvConfig(env);
const login = new loginPage();
const products = new productsPage();
const cart = new cartPage();

test.describe('cart Page Scenarios', () => {
  test('[regression] check Total Item Count And Individual Price', async ({ page }) => {
    await login.loginToHomePageWithValidCredentials(
      page,
      config.URL,
      config.USERNAME,
      config.PASSWORD
    );
    await products.sortByPriceLowToHigh(page);
    await products.clickOnAddtocart(page);
    await products.clickOnCartBadgeIcon(page);
    const quantity = await cart.validateItemQuantity(page);
    const getQuantityText = await quantity.allTextContents();
    console.log('Quantity', getQuantityText);
    expect(quantity).toHaveText([testData.FIRSTITEMQUANTITY, testData.SECONDITEMQUANTITY]);
    const Prices = await cart.validateItemPrice(page);
    const getPriceText = await cart.validateItemPrice(page).allTextContents();
    console.log('Price', getPriceText);
    expect(Prices).toHaveText([testData.FIRSTITEMPRICE, testData.SECONDITEMPRICE]);
  });
  test('navigate To The CheckoutPage', async ({ page }) => {
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
  });
});
