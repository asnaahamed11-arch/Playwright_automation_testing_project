import { test, expect } from '@playwright/test';
import { ButtonInteractions } from '../pages/buttonInteractionPage';

test('Button Interactions', async ({ page }) => {
  await page.goto('https://www.sreenidhirajakrishnan.com/practice');
let obj1 = new ButtonInteractions(page);
await obj1.sigClick();

await expect(page.locator(obj1.singleClickResult)).toContainText('Single clicked!');

await obj1.doubleClick();
await expect(page.locator(obj1.doubleClickResult)).toContainText('Double clicked!');

await obj1.rightClick();
await expect(page.locator(obj1.rightClickResult)).toContainText('Right click captured (context menu blocked)');

});
