import { Page } from '@playwright/test';
import testData from '../testData.json';
export default class CheckoutPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
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
  async enterYourInformationeField() {
    await this.page.fill(this.firstNameField, testData.FIRSTNAME);
    await this.page.fill(this.lastNameField, testData.LASTNAME);
    await this.page.fill(this.postalCodeField, testData.POSTALCODE);
    await this.page.locator(this.continueButton).click();
  }
}
