import test, { Page } from 'playwright/test';
import { testData } from '../testData/testData';

export class FillTheForm{
    constructor(private page :Page){}
    //Locators
   // nameInoutField ;
// emailInputField;
  //
    async FormEnterAction()
    {
        await this.page.locator(testData.nameInoutField).fill(testData.name);
        await this.page.locator(testData.emailInputField).fill(testData.email);

    }
} 