import { Page } from '@playwright/test';
export default class CheckoutCompletePage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  private get successfulMessage(): string {
    return '[data-test=complete-header]';
  }
  getsuccessfulMessage() {
    return this.page.locator(this.successfulMessage);
  }
}
