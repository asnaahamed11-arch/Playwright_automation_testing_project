import { Page } from "@playwright/test";
export class DropDownClass{
constructor(private page:Page){}
//locators
standardSelect = '[data-testid="standard-select"]';
multiSelect = '[data-testid="multi-select"]';
 customToggle = '[data-testid="custom-dropdown-toggle"]';
customOptionBeta = '[data-testid="custom-option-beta"]';
dynamicSelect = '[data-testid="dynamic-select"]';
async selectDrp(val:string)
{
    await this.page.locator(this.standardSelect).selectOption(val);
  
}
async multisel(values:string)
{
    await this.page.locator(this.multiSelect).selectOption(values);
}
async customDiv()
{
   await this.page.locator(this.customToggle).click();
  await  this.page.locator(this.customOptionBeta).click();
}
async dynamicMethod(valu:string)
{
    await this.page.locator(this.dynamicSelect).selectOption(valu);
    
}

}