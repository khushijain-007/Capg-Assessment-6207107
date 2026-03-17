import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";
import { AmazonCareers } from "../tests/task28b.page.ts";

test("POM Amazon Careers", async ({ page }) => {

const dataPath = path.join(__dirname, "../tests/uploadFile/career.json");
const data = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

const  career = new AmazonCareers(page);

    await career.openSite(data.url);
    await page.goto(career.jobSearchUrl);
    await career.opportunities();
    await career.university();
    await career.applyFilters(data);
    await career.offer();
    await expect(page).toHaveURL(/job/);
    await page.screenshot({ path: "./screenshots/career.png" });

});
