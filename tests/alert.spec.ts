import { test, expect } from '@playwright/test';
import { Alert } from '../pages/alertPage';

test('Alerts ', async ({ page }) => {
  await page.goto('https://www.sreenidhirajakrishnan.com/practice');
     let altObj = new Alert(page);
     await  altObj.showAlrt();
     await altObj.confirmAlert(true);
     await expect(page.locator(altObj.alertResult)).toBeVisible();
     await altObj.PromptAlert('asna');
     await expect(page.locator(altObj.alertResult)).toContainText("Prompt value: asna");

});