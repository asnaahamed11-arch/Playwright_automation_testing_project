import { test, expect } from '@playwright/test';
import { FillTheForm } from '../pages/textInputPage';
import{testData} from '../testData/testData';

test('Fill the form', async ({ page }) => {

  await page.goto(testData.url);
 let objFillForm =new FillTheForm(page);
 await objFillForm.FormEnterAction();
  
});