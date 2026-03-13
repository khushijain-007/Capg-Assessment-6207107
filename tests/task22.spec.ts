import { test, expect } from "@playwright/test";

test.only("Upload file", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/upload");

    await page.locator("#file-upload")
        .setInputFiles("C:/Users/hp/Downloads/practice/a.txt");

    await page.locator("#file-submit").click();

    await expect(page.locator("#uploaded-files"))
        .toContainText("a.txt");
    await page.waitForTimeout(2000)

    await page.screenshot({path:"./screenshots/uploadFileUK.png"})

});