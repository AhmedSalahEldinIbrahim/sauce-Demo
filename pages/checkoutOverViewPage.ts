import { Page } from '@playwright/test';
export default class CheckoutOverViewPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  private get totalCalculation(): string {
    return '[data-test=total-label]';
  }
  private get finishButton(): string {
    return '[name="finish"]';
  }
  getTotalCalculation() {
    return this.page.locator(this.totalCalculation);
  }
  async clickOnFinishButton() {
    await this.page.locator(this.finishButton).click();
  }
}
