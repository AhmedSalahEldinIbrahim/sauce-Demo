import { Page } from '@playwright/test';
import testData from '../testData.json';
export default class checkoutPage {
  private get firstNameField(): string {
    return '[name="firstName"]';
  }
  private get lastNameField(): string {
    return '[name="lastName"]';
  }
  private get postalCodeField(): string {
    return '[name="postalCode"]';
  }
  private get continueButton(): string {
    return '[name="continue"]';
  }
  async enterYourInformationeField(page: Page) {
    await page.fill(this.firstNameField, testData.FIRSTNAME);
    await page.fill(this.lastNameField, testData.LASTNAME);
    await page.fill(this.postalCodeField, testData.POSTALCODE);
    await page.locator(this.continueButton).click();
  }
}
