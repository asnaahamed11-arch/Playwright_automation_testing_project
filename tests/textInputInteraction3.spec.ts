import { test, expect } from '@playwright/test';
import { BasicForm } from '../pages/textInputInteractionPage3';

test('Test fill form', async ({ page }) => {
  await page.goto('https://www.sreenidhirajakrishnan.com/practice');
 let basicForm= new BasicForm(page);
 await basicForm.fillForm('asna','Abc@123','asna@abc.com','985624586','hi this is the text area part');

 await basicForm.submitForm();
 await expect(page.locator(basicForm.formResult)).toContainText("Form submitted successfully");

await basicForm.resetForm();
await expect(page.locator(basicForm.formResult)).toContainText("Form was reset");
 
});