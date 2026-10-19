import { Page } from "@playwright/test";
export class ScrollNUplload{
constructor(private page:Page){}
//Locators
uploadBtn='#file-upload';

async scrollFileUpload()
{
    await this.page.locator(this.uploadBtn).scrollIntoViewIfNeeded();
    const filePath="C:\\Users\\USER//OneDrive\\Desktop\\Asna_Ahamed_Resume.pdf";
    await this.page.locator(this.uploadBtn).setInputFiles(filePath);
    
}

}