import { Page } from '@playwright/test';
export default class cartPage {
  private get cartList(): string {
    return '.cart_item';
  }
  private get quantityField(): string {
    return '.cart_quantity';
  }
  private get priceField(): string {
    return '.inventory_item_price';
  }
  private get checkoutButton(): string {
    return '[name="checkout"]';
  }
  validateItemQuantity(page: Page) {
    return page.locator(this.cartList).locator(this.quantityField);
  }
  validateItemPrice(page: Page) {
    return page.locator(this.cartList).locator(this.priceField);
  }
  async clickOnCheckoutButton(page: Page) {
    await page.waitForTimeout(3000);
    await page.locator(this.checkoutButton).click();
  }
}
