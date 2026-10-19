import { Page } from "@playwright/test";
export class MultiFileUpload
{
    constructor(private page:Page){}
    //Locators
   // filebutton ="#file-upload";
   fileButton='#multipleFilesInput';
   uploadBtn='//*[@id="multipleFilesForm"]/button';
   fileStatus='#multipleFilesStatus';
   
    async MutipleFileUpload(filepaths:string[])
    {
        await this.page.locator(this.fileButton).setInputFiles(filepaths);
    await this.page.locator(this.uploadBtn).click();
    }


}