import { Page } from '@playwright/test';
export default class cartPage {
  private get totalCalculation(): string {
    return '[data-test=total-label]';
  }
  private get finishButton(): string {
    return '[name="finish"]';
  }
  getTotalCalculation(page: Page) {
    return page.locator(this.totalCalculation);
  }
  async clickOnFinishButton(page: Page) {
    await page.locator(this.finishButton).click();
  }
}
