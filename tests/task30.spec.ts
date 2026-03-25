import { test, expect } from '@playwright/test';
import { LoginPage } from "../PageObjectModel/login1.page.ts";
import testData from "../Utilities/customer.json";
import { Account } from '../PageObjectModel/account.page.ts';
import { CustomerPage } from '../PageObjectModel/customer.page.ts';

test("E2E Banking scenario", async ({ page }) => {

  const loginPage = new LoginPage(page);
  const accountPage = new Account(page);
  const customerPage = new CustomerPage(page);

  await loginPage.goto();
  await loginPage.clickManagerLogin();
  await loginPage.clickCustomerLogin();

  await loginPage.enterFirstName(testData.customer.firstName);
  await loginPage.enterLastName(testData.customer.lastName);
  await loginPage.enterPostCode(testData.customer.postCode);

  page.on('dialog', async dialog => await dialog.accept());

  await loginPage.clickAddCustomerSubmit();

  await page.getByRole('button', { name: 'Open Account' }).click();

  await accountPage.customerName('Saransh Saxena');
  await accountPage.selectCurrency('Rupee');
  await accountPage.clickProcess();

  await page.getByRole('button', { name: 'Home' }).click();
  await page.getByRole('button', { name: 'Customer Login' }).click();

  await customerPage.loginCustomer('Saransh Saxena');

  await customerPage.deposit('5000');
  await customerPage.withdraw('2000');

  const balance = await customerPage.getBalance();
  expect(balance).toBe(3000);

  await customerPage.logout();

});