import { expect, Page } from "@playwright/test";

export class className{
    constructor (private page:Page){}
    name='#name';
    start='//*[@id="HTML5"]/div[1]/button';
    
    async filling()
    {
    
        await this.page.locator(this.name).fill("Asna");
        await this.page.getByPlaceholder('Enter EMail').fill("asaha@gmail.com");
        await this.page.locator(this.start).click();
        await expect(this.page.locator(this.start)).toContainText("STOP");
        
    }
    
}