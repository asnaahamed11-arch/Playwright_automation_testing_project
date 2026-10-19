import { test, expect } from '@playwright/test';
import { Scroll } from '../pages/scrollTesting';

test('Scroll Test', async ({ page }) => {
  await page.goto('https://www.sreenidhirajakrishnan.com/practice');
  const scrollobj=new Scroll(page);
  await scrollobj.scrollToElement();
  await expect(page.locator(scrollobj.scrollTarget)).toBeVisible();


});