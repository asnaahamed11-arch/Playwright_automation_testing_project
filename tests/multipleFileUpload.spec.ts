import { test, expect } from '@playwright/test';
import { MultiFileUpload } from '../pages/multipleFileUpload';

test('MultipleFile Upload Test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  const objfile= new MultiFileUpload(page);
  const filepaths=["C:\\Users\\USER\\OneDrive\\Pictures\\image_3.jpg",
   "C:\\Users\\USER\\OneDrive\\Desktop\\Screenshots\\drag.png"];
  await objfile.MutipleFileUpload(filepaths);
await expect(page.locator(objfile.fileStatus)).toContainText("drag.png");

 
});
