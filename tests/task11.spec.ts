import {test, expect} from "@playwright/test";

test("Qspiders get elements", async ({ page }) => {

    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
    test.setTimeout(10000);  

    await page.getByPlaceholder("Enter your name").fill("Sanya");
    await page.getByPlaceholder("Enter your email").fill("abc@gmail.com");
    await page.getByPlaceholder("Enter your password").fill("abc12345");
    await page.getByRole("button", { name: "Login" }).click();

    await expect(page.getByPlaceholder("Enter your name")).toBeVisible();
    await expect(page.getByPlaceholder("Enter your email")).toBeVisible();
    await expect(page.getByPlaceholder("Enter your password")).toBeVisible();
    await expect(page.getByRole("button", { name: "Login" })).toBeEnabled();

});