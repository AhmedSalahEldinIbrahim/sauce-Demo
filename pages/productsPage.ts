import { Page } from '@playwright/test';
export default class ProductsPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  private get filterIcon() {
    return '[data-test=product-sort-container]';
  }
  private get filterByPriceLowToHigh(): string {
    return 'lohi';
  }
  private get ProductsPageTitle() {
    return '[data-test=title]';
  }
  private get itemContainer(): string {
    return '.inventory_item';
  }
  private get addToCartButton(): string {
    return 'button:has-text("Add to cart")';
  }
  private get removeButton(): string {
    return 'button:has-text("Remove")';
  }
  private get cartBadgeIcon() {
    return '[data-test="shopping-cart-link"]';
  }
  async clickOnCartBadgeIcon() {
    this.page.locator(this.cartBadgeIcon).click();
    await this.page.waitForTimeout(4000);
  }
  getProductsPageTitle() {
    return this.page.locator(this.ProductsPageTitle);
  }
  async sortByPriceLowToHigh() {
    this.page.locator(this.filterIcon).selectOption(this.filterByPriceLowToHigh);
  }
  async clickOnAddtocart() {
    for (let i = 0; i < 2; i++) {
      await this.page.locator(this.itemContainer).nth(i).locator(this.addToCartButton).click();
    }
  }
  valiateItemsAreAdded(index: number) {
    return this.page.locator(this.itemContainer).nth(index).locator(this.removeButton);
  }
}
