import { test, expect } from "@playwright/test";

test.only("Notification popup", async ({ browser }) => {

    const context = await browser.newContext({
        permissions: ["notifications"]
    });

    const page = await context.newPage();
    await page.goto("https://www.justdial.com/");

    const searchBox = page.locator('//input[@placeholder="Search for Pest Control Services"]');
    await searchBox.fill("Restaurants");
    await page.keyboard.press("Enter");
    await page.waitForLoadState("domcontentloaded");

    await expect(page).toHaveURL(/restaurants/i);

});