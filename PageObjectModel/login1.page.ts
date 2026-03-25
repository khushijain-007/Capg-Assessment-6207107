import { Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login");
  }

  async clickManagerLogin() {
    await this.page.getByRole('button', { name: 'Bank Manager Login' }).click();
  }

  async clickCustomerLogin() {
    await this.page.getByRole('button', { name: 'Add Customer' }).click();
  }

  async enterFirstName(firstName: string) {
  await this.page.getByPlaceholder('First Name').fill(firstName);
}

async enterLastName(lastName: string) {
  await this.page.getByPlaceholder('Last Name').fill(lastName);
}

async enterPostCode(postCode: string) {
  await this.page.getByPlaceholder('Post Code').fill(postCode);
}

  async clickAddCustomerSubmit() {
  await this.page.locator('//button[@class="btn btn-default"]').click();
}
}