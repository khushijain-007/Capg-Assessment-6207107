import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs";

let datafile = fs.readFileSync(path.join(__dirname, "../tests/uploadFile/userData.json"));
let data = JSON.parse(datafile);

test("Login-Profile Update-Logout using JSON", async ({ page }) => {

    for (let d of data) {
         test.setTimeout(70000);

    await page.goto("https://demoqa.com/login", { waitUntil: "domcontentloaded" });

        await page.locator("#userName").fill(d.username);
        await page.locator("#password").fill(d.password);
        await page.locator("#login").click();

        await expect(page).toHaveURL(/profile/);
        await page.locator("#gotoStore").click(); 

        await page.goto("https://demoqa.com/profile");
        await expect(page.locator("#userName-value")).toContainText(d.username);
        await page.locator('#submit').first().scrollIntoViewIfNeeded();
        await page.locator('#submit').first().click();
        await expect(page).toHaveURL(/login/);
    }

});