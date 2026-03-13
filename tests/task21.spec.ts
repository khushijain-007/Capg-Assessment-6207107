import { test, expect } from "@playwright/test"
import path from "path"

test.only("Upload Profile Image", async ({ browser }) => {

    let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto("https://demoqa.com/upload-download")

    const [downloadFile] = await Promise.all([
        page.waitForEvent("download"),
        page.locator("#downloadButton").click()
    ])

    console.log("Downloaded file:", downloadFile.suggestedFilename())
    let fileName = downloadFile.suggestedFilename()
    let downloadFolder = "C:/Users/hp/Desktop/playwright/downloads"
    await downloadFile.saveAs(path.join(downloadFolder, fileName))

    await page.locator("#uploadFile")
.setInputFiles("C:/Users/hp/Pictures/Screenshots/Screenshot 2026-03-13 151446.png")
    await expect(page.locator("#uploadedFilePath"))
.toContainText("Screenshot 2026-03-13 151446.png")

})