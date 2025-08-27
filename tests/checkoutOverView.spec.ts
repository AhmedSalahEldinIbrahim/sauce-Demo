import { test, expect } from '../baseTest';
import testData from '../testData.json';
import { getEnvConfig } from '../utils/env.config';
test.describe.configure({ mode: 'parallel', retries: 5 });
const env = process.env.ENV || 'dev';
const config = getEnvConfig(env);

test.describe('checkout OverView Page Scenarios', () => {
  test('[regression] check the tax Click On Continue Button', async ({
    loginPage,
    productPage,
    cartPage,
    checkoutPage,
    checkoutOverViewPage,
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
    await expect(checkoutOverViewPage.getTotalCalculation()).toContainText(testData.TOTALTAX);
    // await page.waitForTimeout(3000);
  });
  test('[smoke] complete The Order', async ({
    loginPage,
    productPage,
    cartPage,
    checkoutPage,
    checkoutOverViewPage,
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
    await checkoutOverViewPage.clickOnFinishButton();
  });
});
