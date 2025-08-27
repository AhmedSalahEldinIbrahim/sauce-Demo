import { test as base, expect } from '@playwright/test';
import ProductsPage from './pages/productsPage';
import LoginPage from './pages/loginPage';
import CheckoutPage from './pages/checkoutPage';
import CartPage from './pages/cartPage';
import CheckoutOverViewPage from './pages/checkoutOverViewPage';
import CheckoutCompletePage from './pages/checkoutCompletePage';
import { getEnvConfig } from './utils/env.config';
const env = process.env.ENV || 'dev';
const config = getEnvConfig(env);

type Fixtures = {
  loginPage: LoginPage;
  productPage: ProductsPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  checkoutOverViewPage: CheckoutOverViewPage;
  checkoutCompletePage: CheckoutCompletePage;
};

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  productPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
  checkoutOverViewPage: async ({ page }, use) => {
    await use(new CheckoutOverViewPage(page));
  },
  checkoutCompletePage: async ({ page }, use) => {
    await use(new CheckoutCompletePage(page));
  },
});

export { expect };
