import { test, expect } from '@playwright/test';
import { MouseHoverClass } from '../pages/mouseHover';

test('MouseHover', async ({ page }) => {
  await page.goto('https://www.sreenidhirajakrishnan.com/practice#section-14');
 const objMHover = new MouseHoverClass(page);
 await objMHover.hoverMouse();
 await expect(page.locator(objMHover.hoverSubmenu)).toBeVisible();
 

});