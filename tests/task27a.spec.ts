import { test } from "@playwright/test";
import { Task27Page } from "./task27b.page";
import fs from "fs";

const data = JSON.parse(
  fs.readFileSync("./tests/uploadFile/FKdata.json", "utf-8")
);

test("Flipkart End To End Scenario", async ({ page }) => {

  const flipkart = new Task27Page(page);

    await flipkart.openSite(data.url);
    await flipkart.clickHome();
    await flipkart.openGudiPadwaStore();
    await flipkart.openGudiCloth();
    await flipkart.selectProduct(data.productIndex1);
    await flipkart.addToCart();
    await flipkart.page.close();
    await page.bringToFront();
    // await page.goBack();

    await flipkart.selectProduct(data.productIndex2);
    await flipkart.addToCart();
    await flipkart.goToCart();

    await flipkart.increaseQuantity();
    await flipkart.placeOrder();
    await flipkart.takeScreenshot();

});