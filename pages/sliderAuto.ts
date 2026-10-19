import { Page } from "@playwright/test";
export class sliderAutomation{
    
    constructor(private page:Page){}
    //Locators
    slider1='//*[@id="slider-range"]/span[1]';
    slider2='//*[@id="slider-range"]/span[2]';
    async movingSliders(val1:string,val2:string)
    {
        await this.page.locator(this.slider1).fill(val1);
        await this.page.locator(this.slider1).dispatchEvent('input');
        this.page.pause();

    }

    
}

