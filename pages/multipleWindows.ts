import { Page } from "@playwright/test";
export class MultiWindow
{
    constructor(private page:Page){}
    // Locators
    link = '//*[@id="Attribution1"]/div[1]/a[1]';
    dropdown = 'button, [role="button"]';
   
    async handlWindows()
    {
      //Step 1 :wait for new window
        const newPagePromise= this.page.context().waitForEvent('page');
        //Step 2 ;Click the link
        await this.page.locator(this.link).click();
        //Step3 :wait for the new page
        const newPage = await newPagePromise;
        //Step 4 :wait for new page to load

        await newPage.waitForLoadState('domcontentloaded');

       // Step 5: find the dropdown in new this.page

       const dropdown = newPage.locator(this.dropdown);
       //Step 6 :Click th dropdown

       await dropdown.click();


    }



}