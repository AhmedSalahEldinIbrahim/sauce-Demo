import { Page } from '@playwright/test';
export default class CartPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
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
  validateItemQuantity() {
    return this.page.locator(this.cartList).locator(this.quantityField);
  }
  validateItemPrice() {
    return this.page.locator(this.cartList).locator(this.priceField);
  }
  async clickOnCheckoutButton() {
    await this.page.waitForTimeout(3000);
    await this.page.locator(this.checkoutButton).click();
  }
}
