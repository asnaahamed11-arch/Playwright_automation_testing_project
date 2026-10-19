import { test, expect } from '@playwright/test';
import { Download } from '../pages/downloadTestPage';

test('Download Test', async ({ page }) => {
  await page.goto('https://www.sreenidhirajakrishnan.com/practice#section-28');
 const down= new Download(page);
const d= await down.triggerDownload();

await expect(d.suggestedFilename()).toBe('practice.txt');

      
});
