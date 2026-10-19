import { test, expect } from '@playwright/test';
import { ScrollNUplload } from '../pages/Interview';

test('has title', async ({ page }) => {
  await page.goto('https://www.sreenidhirajakrishnan.com/practice#section-16');
  let upload=new ScrollNUplload(page);
  await upload.scrollFileUpload();
  

});
