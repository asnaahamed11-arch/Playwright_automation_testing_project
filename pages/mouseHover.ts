import { Page } from "@playwright/test";
export class MouseHoverClass{
    constructor(private page:Page){}
    //Locators
    // Hover Trigger
    hoverTrigger = '[data-testid="hover-menu-trigger"]';

    // Submenu & Submenu Items / Expected Result
    hoverSubmenu = '[data-testid="hover-submenu"]';

    async hoverMouse()
    {
        await this.page.locator(this.hoverTrigger).hover();
        
    }
    
}