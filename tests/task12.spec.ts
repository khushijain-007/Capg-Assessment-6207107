import { test, expect } from "@playwright/test";

test("Flipkart assertions", async ({ page }) => {

    await page.goto("https://www.flipkart.com/");
    await page.waitForTimeout(3000); 

    await page.getByPlaceholder("Search for Products, Brands and More").first().fill("shoes");
    await page.keyboard.press("Enter");
    await page.waitForTimeout(3000);  

    const womenShoes = page.locator('//a[contains(text(),"Women")]');
    await expect(page).toHaveTitle(/Flipkart/);
    await expect(page.getByPlaceholder("Search for Products, Brands and More")).toBeVisible();
    await expect(womenShoes.first()).toBeVisible();

    await expect(page).toHaveScreenshot();

});