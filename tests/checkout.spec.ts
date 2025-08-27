import { test } from '../baseTest';
import { getEnvConfig } from '../utils/env.config';
test.describe.configure({ mode: 'parallel', retries: 5 });
const env = process.env.ENV || 'dev';
const config = getEnvConfig(env);

test.describe('checkout Page Scenarios', () => {
  test('[smoke] enter Your Information Fields', async ({
    loginPage,
    productPage,
    cartPage,
    checkoutPage,
  }) => {
    await loginPage.loginToHomePageWithValidCredentials(
      config.URL,
      config.USERNAME,
      config.PASSWORD
    );
    await productPage.sortByPriceLowToHigh();
    await productPage.clickOnAddtocart();
    await productPage.clickOnCartBadgeIcon();
    await cartPage.clickOnCheckoutButton();
    await checkoutPage.enterYourInformationeField();
    // await page.waitForTimeout(3000);
  });
});
