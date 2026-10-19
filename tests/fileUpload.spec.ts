import { test, expect } from '@playwright/test';
import { FileUpload } from '../pages/fileUPload';

test('FileUpload Test', async ({ page }) => {
  await page.goto('https://www.sreenidhirajakrishnan.com/practice');

  const ff= new FileUpload(page);
  const filePath = "C:\\Users\\USER\\OneDrive\\Desktop\\Screenshots\\drag.png";
  await ff.uploadFile(filePath);
  await expect(page.locator(ff.uploadResult)).toContainText('drag.png');


});