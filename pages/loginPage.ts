import { Page } from '@playwright/test';
import productsPage from './productsPage';
export default class loginPage {
  private get emailTextField() {
    return '[name="user-name"]';
  }
  private get passwordTextField() {
    return '[name="password"]';
  }
  private get loginButton() {
    return '[name=login-button]';
  }
  private get ProductsPageTitle() {
    return '[data-test=title]';
  }
  private get errorMessage() {
    return '[data-test=error]';
  }

  async loginToHomePageWithValidCredentials(
    page: Page,
    url: string,
    username: string,
    password: string
  ) {
    await page.goto(url);
    await page.setViewportSize({ width: 1530, height: 816 });
    await page.fill(this.emailTextField, username);
    await page.fill(this.passwordTextField, password);
    await page.locator(this.loginButton).click();
    return new productsPage();
  }
  getProductsPageTitle(page: Page) {
    return page.locator(this.ProductsPageTitle);
  }
  async loginToHomePageWithInValidCredentials(
    page: Page,
    url: string,
    username: string,
    inValidPassword: string
  ) {
    await page.goto(url);
    await page.setViewportSize({ width: 1530, height: 816 });
    await page.fill(this.emailTextField, username);
    await page.fill(this.passwordTextField, inValidPassword);
    await page.locator(this.loginButton).click();
  }
  getErrorMessage(page: Page) {
    return page.locator(this.errorMessage);
  }
}
