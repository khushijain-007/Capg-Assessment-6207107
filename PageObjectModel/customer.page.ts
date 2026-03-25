import { Page, Locator } from '@playwright/test';

export class CustomerPage {
  readonly page: Page;

  readonly nameDropdown: Locator;
  readonly loginBtn: Locator;
  readonly depositTab: Locator;
  readonly depositInput: Locator;
  readonly depositBtn: Locator;
  readonly withdrawTab: Locator;
  readonly withdrawInput: Locator;
  readonly withdrawBtn: Locator;
  readonly balance: Locator;
  readonly logoutBtn: Locator;

  constructor(page: Page) {
    this.page = page;

    this.nameDropdown = page.locator('#userSelect');
    this.loginBtn = page.getByRole('button', { name: 'Login' });

    this.depositTab = page.getByRole('button', { name: 'Deposit' });
    this.depositInput = page.locator('input[ng-model="amount"]');
    this.depositBtn = page.locator('button[type="submit"]');

    this.withdrawTab = page.getByRole('button', { name: 'Withdrawl' });
    this.withdrawInput = page.locator('input[ng-model="amount"]');
    this.withdrawBtn = page.locator('button[type="submit"]');

    this.balance = page.locator('strong.ng-binding').nth(1);
    this.logoutBtn = page.getByRole('button', { name: 'Logout' });
  }

  async loginCustomer(name: string) {
    await this.nameDropdown.selectOption({ label: name });
    await this.loginBtn.click();
  }

  async deposit(amount: string) {
    await this.depositTab.click();
    await this.depositInput.fill(amount);
    await this.depositBtn.click();
    await this.page.waitForTimeout(1000);
  }

  async withdraw(amount: string) {
    await this.withdrawTab.click();
    await this.withdrawInput.fill(amount);
    await this.withdrawBtn.click();
    await this.page.waitForTimeout(1000);
  }

  async getBalance(): Promise<number> {
    const text = await this.balance.textContent();
    return Number(text?.trim());
  }

  async logout() {
    await this.logoutBtn.click();
  }
}