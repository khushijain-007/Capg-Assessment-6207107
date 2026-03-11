import {test, expect} from "@playwright/test";

test("Sorting Options", async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await page.getByPlaceholder("Username").fill("standard_user")
    await page.getByPlaceholder("Password").fill("secret_sauce")
    await page.locator('//input[@class="submit-button btn_action"]').click()

    
    await page.locator('.product_sort_container').selectOption({ label: "Price (low to high)" });
    await page.locator('//div[@class="inventory_item"]').first().hover()
    await page.locator('//button[@class="btn btn_primary btn_small btn_inventory "]').first().click()
    await page.waitForTimeout(3000)
    await page.screenshot({ path: './screenshots/saucedemo.png' });



 })