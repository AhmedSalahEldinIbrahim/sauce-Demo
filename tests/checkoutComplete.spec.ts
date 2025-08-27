import { test, expect } from '../baseTest';
import { getEnvConfig } from '../utils/env.config';
test.describe.configure({ mode: 'parallel', retries: 5 });
const env = process.env.ENV || 'dev';
const config = getEnvConfig(env);
test.describe('checkout Complete Page Scenarios', () => {
  test('[smoke] SuccessfulMessageAppeared', async ({
    loginPage,
    productPage,
    cartPage,
    checkoutPage,
    checkoutOverViewPage,
    checkoutCompletePage,
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
    await expect(checkoutCompletePage.getsuccessfulMessage()).toBeVisible();
  });
});
