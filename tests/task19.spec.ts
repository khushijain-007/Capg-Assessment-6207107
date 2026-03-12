import { test, expect } from "@playwright/test";

test.only("Handle Alert, Confirm and Prompt dialogs", async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    page.on("dialog", async (dialog) => {

        const type = dialog.type();
        console.log("Dialog Type:", type);
        console.log("Dialog Message:", dialog.message());

        if (type === "alert") {
            await dialog.accept();
        }

        else if (type === "confirm") {
            await dialog.dismiss(); 
        }

        else if (type === "prompt") {
            await dialog.accept("Playwright Testing");
        }
    });

    await page.locator('//button[text()="Click for JS Alert"]').click();
    await expect(page.locator("#result"))
        .toHaveText("You successfully clicked an alert");

    await page.locator('//button[text()="Click for JS Confirm"]').click();
    await expect(page.locator("#result"))
        .toHaveText("You clicked: Cancel");

    await page.locator('//button[text()="Click for JS Prompt"]').click();
    await expect(page.locator("#result"))
        .toHaveText("You entered: Playwright Testing");

});