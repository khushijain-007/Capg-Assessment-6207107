import { test } from "@playwright/test";

test("Keyboard Acton Email", async ({ page }) => {

    await page.goto("https://mail.google.com/mail/u/0/#inbox");

    const compose = page.locator('//div[text()="Compose"]');

    await compose.hover();
    await compose.click();
    // await page.locator('//textarea[@name="to"]').fill("test@example.com");
    // await page.locator('//input[@name="subjectbox"]').fill("Playwright Test Mail");
    // await page.locator('//div[@aria-label="Message Body"]').fill("Hello, this is a test email sent using Playwright automation.");

    await page.keyboard.type("test@example.com");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Enter");
    await page.keyboard.press("Tab");
    await page.keyboard.type("Playwright test keyboard action");
    await page.keyboard.press("Tab");
    await page.keyboard.type("Hello, it's been a good day!!!!");
    await page.keyboard.press("Control+Enter");
    await page.screenshot({ path: "gmail_sent.png", fullPage: true });
});