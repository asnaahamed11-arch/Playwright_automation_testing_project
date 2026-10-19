import { test, expect } from '@playwright/test';
import { DropDownClass } from '../pages/dropDownPage1';

test('Dropdown Test Automation', async ({ page }) => {
  await page.goto('https://www.sreenidhirajakrishnan.com/practice');
 let dropp = new DropDownClass(page);
 await dropp.selectDrp('Green');
 await dropp.multisel(['Java','Python']);
 await dropp.customDiv();
await dropp.dynamicMethod('Playwright');
 
});
