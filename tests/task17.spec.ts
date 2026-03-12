// cCode 1 :- Right but not working
// This code is also right but but the popup is not working on the amazon site. I have tried it multiple times but not working but this code is still right.

// import { test, expect } from "@playwright/test";

// test.only("Multiple tabs", async ({ browser }) => {
//     let context = await browser.newContext();
//     let page = await context.newPage();

//     await page.goto("https://www.amazon.com/");
//     await page.locator('//input[@id="twotabsearchtextbox"]').fill("Samsung Mobile");
//     await page.keyboard.press("Enter");

//     const [page1] = await Promise.all([
//         page.waitForEvent("popup"),
//         page.locator('//a[@class="a-link-normal s-line-clamp-2 puis-line-clamp-3-for-col-4-and-8 s-link-style a-text-normal"]').first().click()
//     ]);
//     await page1.waitForLoadState();

//     const productTitle = await page1.locator('//span[@class="a-size-large product-title-word-break"]').textContent();
//     console.log("Product Title:", productTitle);
// });



// Code 2 :- right and working
import { test, expect } from "@playwright/test";

test.only("Multiple tabs", async ({ browser }) => {

    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto("https://www.amazon.com/");
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("Samsung Mobile");
    await page.keyboard.press("Enter");

    await page.locator('//a[@class="a-link-normal s-line-clamp-2 puis-line-clamp-3-for-col-4-and-8 s-link-style a-text-normal"]').first().click();
    await page.waitForLoadState();

    const productTitle = await page.locator('(//span[@class="a-size-large product-title-word-break"])[1]').textContent();
    console.log("Product Title:", productTitle);

    await expect(page.locator('(//span[@class="a-size-large product-title-word-break"])[1]')).toBeVisible();
});