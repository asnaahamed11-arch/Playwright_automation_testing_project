import { test, expect } from '@playwright/test';
import { DragnDrop } from '../pages/dragNDrop';

test('Drag and Drop Test', async ({ page }) => {
  await page.goto('https://www.sreenidhirajakrishnan.com/practice#section-13');
const dd= new DragnDrop(page);
await dd.dragDrop();
await expect(page.locator(dd.dropResult)).toContainText("Item dropped successfully");
  
});