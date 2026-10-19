import { test, expect } from '@playwright/test';
import { CheckNRadio } from '../pages/checkBoxAndRadioPage';

test('Check Boxes and Radio', async ({ page }) => {
  await page.goto('https://www.sreenidhirajakrishnan.com/practice');
 let cheRad =new CheckNRadio(page);
 await cheRad.togglechecks();
  await cheRad.radioSelect();
  await cheRad.revealCheck();
  
});