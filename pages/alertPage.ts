import { Page } from "@playwright/test";
export class Alert{
constructor(private page :Page){}
// Alert Triggers (selectors for buttons on the page)
    alertBtn = '[data-testid="alert-btn"]';
    confirmBtn = '[data-testid="confirm-btn"]';
    promptBtn = '[data-testid="prompt-btn"]';
     alertResult = '[data-testid="alert-result"]';
    async showAlrt()
    {
       await this.page.once('dialog', dialog => dialog.accept());
        await this.page.locator(this.alertBtn).click();
    
    }  
    async confirmAlert(accept:boolean)
    {
        await this.page.once('dialog',dialog=>dialog.accept?dialog.accept():dialog.dismiss());
        await this.page.locator(this.confirmBtn).click();

    }
    async PromptAlert(text:string)
    {
       await this.page.once('dialog', dialog => dialog.accept(text));
        await this.page.locator(this.promptBtn).click();
    
    }  
}