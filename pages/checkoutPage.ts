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
  async enterYourInformationeField(page: Page, url: string, username: string, password: string) {
    await page.fill(this.firstNameField, url);
    await page.fill(this.lastNameField, username);
    await page.fill(this.postalCodeField, password);
    await page.locator(this.continueButton).click();
  }
}
