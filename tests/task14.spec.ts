import { test } from "@playwright/test";

test("Mouse Hover LensKart", async ({ page }) => {

    await page.goto("https://www.lenskart.com/");
    const storeLocator = page.locator('//a[@class="sc-7151b5f7-1 hMYXvh getGaData"]').first();
    await storeLocator.hover();
    await storeLocator.click();
    await page.locator('//input[@placeholder="Search by State/Pincode/Locality"]').fill("Bangalore")
    await page.locator('//div[contains(text(),"Bangalore, Karnataka, India")]').click();

});
