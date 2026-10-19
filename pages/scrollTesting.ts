import { Page } from "@playwright/test";
export class Scroll{
    constructor(private page:Page){}
    //Locators
    scrollTarget = '[data-testid="scroll-target"]';
    async scrollToElement()
    {
        await this.page.locator(this.scrollTarget).scrollIntoViewIfNeeded();
        await this.page.pause();
        
    }
}