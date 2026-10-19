import { test, expect } from '@playwright/test';
import { AlertsAuto } from '../pages/alertAutoPage';

test('Alerts Automation', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
let alt = new AlertsAuto(page);
await alt.simpleAlert();
await alt.confirmationAlert(true);
await expect(page.locator(alt.demoText)).toContainText("You pressed OK!");
await alt.promptAlert('Asna');
await expect(page.locator(alt.demoText)).toContainText("Hello Asna! How are you today?")
});