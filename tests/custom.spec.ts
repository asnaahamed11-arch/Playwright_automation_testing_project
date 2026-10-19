import { test, expect } from '@playwright/test';
import { className } from '../pages/custom';

test('custom', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
   let objectNeww= new className(page);
  await objectNeww.filling();


});