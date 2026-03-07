import {test} from '@playwright/test';

test('Silver medal',async({page})=>{
    await page.goto("https://www.olympics.com/en/olympic-games/tokyo-2020");
    await page.locator('(//a[@data-cy="link" and @class="primary"])[2]').click()
    await page.locator('//section[@data-cy="all-athletes-table"]').click();

    const athlete = page.locator('//h3[text()="ZHANG Yufei"]');
    const silver = page.locator('//h3[text()="ZHANG Yufei"]/ancestor::li//div[contains(@data-medal-id,"silver")]//span[@data-cy="medal-main"]');

    console.log("Athlete:", await athlete.textContent());
    console.log("Silver medals:", await silver.textContent());

    await page.screenshot({ path: "./screenshots/silvermedal.png" });

})
