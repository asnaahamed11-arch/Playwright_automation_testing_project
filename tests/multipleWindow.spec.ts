import { test, expect } from '@playwright/test';
import { MultiWindow } from '../pages/multipleWindows';


test('Multiple Windows test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  const mult=new MultiWindow(page);
  await mult.handlWindows();

});