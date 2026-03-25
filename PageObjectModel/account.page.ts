import { Page } from '@playwright/test';

export class Account {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
    }

     async goto() {
        await this.page.goto("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager/openAccount");
    }

    async customerName(name: string){
        await this.page.locator('#userSelect').selectOption({ label: name });
    }

    async selectCurrency(currency: string) {
    await this.page.locator('#currency').selectOption({ label: "Rupee" });
    }

    async clickProcess() {
    await this.page.locator('//button[text()="Process"]').click();
    }

}