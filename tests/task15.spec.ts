 import {test, expect} from "@playwright/test";

 test("Multi select", async({page})=>{
 
 await page.goto("https://www.automationtesting.co.uk/dropdown.html");
    await page.locator('//h3[text()="Dropdown Menu"]').click({force:true})
    await page.waitForTimeout(3000)
    await page.locator('//select[@id="cars"]').click()
    let options = await page.locator('//select[@id="cars"]').all()
    // let options = await page.locator('//ul[@class="sort-list"]').all()

    for(let opt of options){
        let text = await opt.textContent()
        console.log(text);
    }

})