import { Page } from "@playwright/test";
export class AlertsAuto{
constructor(private page: Page){}
simpleAlertBtn ='#alertBtn';
confirmationBtn='#confirmBtn';
demoText ='#demo';
promptBtn='#promptBtn';
async simpleAlert()
{
    await this.page.once("dialog",dialog=>dialog.accept());
    await this.page.locator(this.simpleAlertBtn).click();

}

async confirmationAlert(accept:boolean)
{
    await this.page.once("dialog",dialog=>dialog.accept?dialog.accept():dialog.dismiss());
    await this.page.locator(this.confirmationBtn).click();
     await this.page.pause();

}
async promptAlert(text:string)
{
    await this.page.once('dialog',dialog=>dialog.accept(text));
    await this.page.locator(this.promptBtn).click();
    

}
}