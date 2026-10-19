import { Page } from "@playwright/test";

export class DragnDrop{

    constructor(private page:Page){}
    draggable = '[data-testid="drag-source"]';
    dropSpot = '[data-testid="drop-zone"]';
    dropResult = '[data-testid="drop-result"]';

    async dragDrop()
    {
        await this.page.locator(this.draggable).dragTo(this.page.locator(this.dropSpot));
  
    }
}