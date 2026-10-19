import { test, expect } from '@playwright/test';

test('Open Google Test Demo', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await expect(page).toHaveTitle(/Google/);

 
});
test('Open Amazon', async ({ page }) => {
  await page.goto('https://www.amazon.in/ref=nav_logo');

 
});
