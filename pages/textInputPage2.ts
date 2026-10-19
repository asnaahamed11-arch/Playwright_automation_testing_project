import { Page } from "@playwright/test";
export class fillForm2{
nameInputText;
constructor(private page:Page)
{
    this.nameInputText = this.page.getByPlaceholder('Enter Name');
}

async formFill2()
{
    await this.nameInputText.fill('Asna Ahamed');
    
}

}