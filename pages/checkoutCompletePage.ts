import { Page } from '@playwright/test';
export default class cartPage {
  private get successfulMessage(): string {
    return '[data-test=complete-header]';
  }
  getsuccessfulMessage(page: Page) {
    return page.locator(this.successfulMessage);
  }
}
