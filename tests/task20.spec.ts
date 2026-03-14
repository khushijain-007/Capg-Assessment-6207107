import { test, expect } from "@playwright/test"
import ExcelJS from "exceljs"
import path from "path"

test("Register multiple users from Excel", async ({ page }) => {

    const book = new ExcelJS.Workbook()
    await book.xlsx.readFile(path.join(__dirname, "../tests/uploadFile/sheet1.xlsx"))
    let sheet = book.getWorksheet("Sheet1")!

    for (let i = 3; i <= sheet.actualRowCount; i++) {
        let row = sheet.getRow(i)
        let data: any[] = []

        data.push(row.getCell(1).value) // -- First Name
        data.push(row.getCell(2).value) // -- Last Name
        data.push(row.getCell(3).toString()) // -- Email
        data.push(row.getCell(4).value) // -- Mobile
        data.push(row.getCell(5).value) // -- State
        data.push(row.getCell(6).value) // -- City

        console.log("User Data:", data)
        await page.goto("https://demoqa.com/automation-practice-form")

        await page.locator("#firstName").fill(String(data[0]))
        await page.locator("#lastName").fill(String(data[1]))
        await page.locator("#userEmail").fill(String(data[2]))
        await page.locator("#userNumber").fill(String(data[3]))

        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
        await page.locator("#state").click()
        await page.getByText(String(data[4]), { exact: true }).click()
        await page.locator("#city").click()
        await page.getByText(String(data[5]), { exact: true }).click()
        await page.locator("#submit").click()

    }


})