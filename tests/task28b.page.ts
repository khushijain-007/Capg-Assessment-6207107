import { Page } from "@playwright/test";

export class AmazonCareers {

  page: Page;

  jobSearchUrl = "https://www.amazon.jobs/en/";
  stuOpps = '//a[@aria-label="Student opportunities"]';
  uniRoles = '//div[text()="Find open university roles"]';

  country = '(//label[@class="filter-value-module_root__YfMaD"])[2]';
  state = '//div[text()="Washington"]';
  city = '//div[text()="Seattle"]';

  empType = '//div[text()="Full time"]';
  category = '//div[text()="Software Development"]';
  career = '//div[text()="Corporate"]';
  team = '//div[text()="Jobs for Grads"]';
  role = '//div[text()="Individual contributor"]';


  job = '//a[text()="Software Development Engineer Apprentice - Military Veterans"]'

  constructor(page: Page) {
    this.page = page;
  }

  async openSite(url: string) {
    await this.page.goto(url);
  }

  async opportunities(){
    await this.page.locator(this.stuOpps).click();
  }

  async university(){
    await this.page.locator(this.uniRoles).click();
  }

  async applyFilters(data: any) {

    await this.page.getByText(data["Country or region"], { exact: false }).click();
    await this.page.getByText(data["State or province"], { exact: false }).click();
    await this.page.getByText(data["City"], { exact: false }).first().click();

    await this.page.getByText(data["Employment type"], { exact: false }).click();
    await this.page.getByText(data["Category"], { exact: false }).nth(3).click();
    await this.page.getByText(data["Career area"], { exact: false }).click();
    await this.page.getByText(data["Team"], { exact: false }).click();
    await this.page.getByText(data["Role type"], { exact: false }).click();
}

  async offer(){
    await this.page.locator(this.job).click();
  }

}