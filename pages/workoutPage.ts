import { Page } from "@playwright/test";
export class NewClass1
{
    constructor(private page: Page){ }
    namefield='#name';
    async sendKeys()
        {
           console.log("funciton reached");
           await  this.page.locator(this.namefield).fill('asna');
        

        }



}