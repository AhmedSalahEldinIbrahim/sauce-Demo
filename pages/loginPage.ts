import { Page } from '@playwright/test';
import productsPage from './productsPage';
export default class LoginPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
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

  async loginToHomePageWithValidCredentials(url: string, username: string, password: string) {
    await this.page.goto(url);
    // await page.setViewportSize({ width: 1530, height: 816 });
    await this.page.fill(this.emailTextField, username);
    await this.page.fill(this.passwordTextField, password);
    await this.page.locator(this.loginButton).click();
  }
  getProductsPageTitle() {
    return this.page.locator(this.ProductsPageTitle);
  }
  async loginToHomePageWithInValidCredentials(
    url: string,
    username: string,
    inValidPassword: string
  ) {
    await this.page.goto(url);
    await this.page.setViewportSize({ width: 1530, height: 816 });
    await this.page.fill(this.emailTextField, username);
    await this.page.fill(this.passwordTextField, inValidPassword);
    await this.page.locator(this.loginButton).click();
  }
  getErrorMessage() {
    return this.page.locator(this.errorMessage);
  }
}
