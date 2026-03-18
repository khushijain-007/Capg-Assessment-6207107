import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";

// Read JSON data
const dataPath = path.join(__dirname, "../tests/uploadFile/e2e.json");
const testData = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

test.describe("E2E File Upload → Validate Uploaded File Name", () => {

  for (const data of testData) {

   test("Upload and validate file", async ({ page }) => {

      await page.goto("https://the-internet.herokuapp.com/upload");

      const filePath = data.filePath;

      if (!fs.existsSync(filePath)) {
        throw new Error(`File not found at path: ${filePath}`);
      }

      await page.setInputFiles("#file-upload", filePath);

      await page.click("#file-submit");
      await page.waitForSelector("#uploaded-files");
      const uploadedFileName = await page.locator("#uploaded-files").textContent();

      console.log("Uploaded File Name:", uploadedFileName);

    });

  }

});