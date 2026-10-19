import { Page } from "@playwright/test";
export class FileUpload{
constructor(private page:Page){}
fileInput = '[data-testid="file-upload"]';
uploadResult = '[data-testid="file-upload-result"]';
async uploadFile(filePath:string[])
{
    await this.page.locator(this.fileInput).setInputFiles(filePath);
    

}
}