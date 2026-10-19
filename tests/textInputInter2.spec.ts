import { test, expect } from '@playwright/test';
import {fillForm2} from '../pages/textInputPage2';
test('Fill the form 2 ', async ({ page }) => {

await page.goto('https://testautomationpractice.blogspot.com/');
 let obj =new fillForm2(page);
await obj.formFill2();
   
});