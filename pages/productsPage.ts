import { Page } from '@playwright/test';
export default class productsPage {
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
  async clickOnCartBadgeIcon(page: Page) {
    page.locator(this.cartBadgeIcon).click();
  }
  getProductsPageTitle(page: Page) {
    return page.locator(this.ProductsPageTitle);
  }
  async sortByPriceLowToHigh(page: Page) {
    page.locator(this.filterIcon).selectOption(this.filterByPriceLowToHigh);
  }
  async clickOnAddtocart(page: Page) {
    for (let i = 0; i < 2; i++) {
      await page.locator(this.itemContainer).nth(i).locator(this.addToCartButton).click();
    }
  }
  valiateItemsAreAdded(index: number, page: Page) {
    return page.locator(this.itemContainer).nth(index).locator(this.removeButton);
  }
}
