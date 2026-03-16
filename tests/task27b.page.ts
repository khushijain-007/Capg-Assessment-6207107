import { Page } from "@playwright/test";

export class Task27Page {

  page: Page;

  homeLink = '//div[text()="Home"]';
  gudiPadwaStore = '(//img[@style="filter: none; opacity: 1; transition: filter 0.5s ease-in-out, opacity 0.5s ease-in-out; width: 100%; margin: auto; display: block; object-fit: contain; aspect-ratio: 1 / 1;"])[1]';
  gudiCloth = '(//img[@style="filter: none; opacity: 1; transition: filter 0.5s ease-in-out, opacity 0.5s ease-in-out; width: 100%; margin: auto; display: block; object-fit: contain; aspect-ratio: 3 / 4;"])[3]';
  products = "//div[@data-id]";
  addToCartBtn = '//div[text()="Add to cart"]';
  cartIcon = "//span[text()='Cart']";
  increaseQtyBtn = "//button[contains(text(),'+')]";
  placeOrderBtn = "//span[text()='Place Order']";

  constructor(page: Page) {
    this.page = page;
  }

  async openSite(url: string) {
    await this.page.goto(url);
  }

  async clickHome() {
    await this.page.locator(this.homeLink).click();
  }

  async openGudiPadwaStore() {
    await this.page.locator(this.gudiPadwaStore).scrollIntoViewIfNeeded();
    await this.page.locator(this.gudiPadwaStore).click();
  }

  async openGudiCloth() {
    await this.page.locator(this.gudiCloth).click();
  }

  async selectProduct(index: number) {

  const product = this.page.locator(this.products).nth(index);

  await product.scrollIntoViewIfNeeded();

  await product.click();

  await this.page.waitForLoadState("networkidle");

}

  async addToCart() {
    // await this.page.locator(this.addToCartBtn).click();
  const btn = this.page.locator(this.addToCartBtn);
//   await btn.waitFor({ state: "visible" });   
//   await btn.scrollIntoViewIfNeeded();        
//   await btn.click({ timeout: 10000 });       
  }

  async goToCart() {
    await this.page.locator(this.cartIcon).click();
  }

  async increaseQuantity() {
    await this.page.locator(this.increaseQtyBtn).first().click();
    await this.page.locator(this.increaseQtyBtn).nth(1).click();
  }

  async placeOrder() {
    await this.page.locator(this.placeOrderBtn).click();
  }

  async takeScreenshot() {
    await this.page.screenshot({
      path: "flipkartFinal.png",
      fullPage: true
    });
  }

}