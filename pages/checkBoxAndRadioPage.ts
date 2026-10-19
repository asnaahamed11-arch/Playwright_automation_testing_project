import { Page } from "@playwright/test";
export class CheckNRadio
{
    constructor(private page:Page){}
    //Locators
    // css locator for select all button
    selectAllCheckbox = '[data-testid="select-all"]';
    
     radio2 = '[data-testid="radio-2"]';
     
     revealCheckbox = '[data-testid="reveal-checkbox"]';

     async togglechecks()
     {
        await this.page.locator(this.selectAllCheckbox).check();
       
        

     }
     async radioSelect()
     {
        await this.page.locator(this.radio2).check();
       
     }
     async revealCheck()
     {
        await this.page.locator(this.revealCheckbox).check();
        await this.page.pause();
     }
}