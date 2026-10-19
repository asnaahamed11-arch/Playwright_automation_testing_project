import { test, expect } from '@playwright/test';
import { NewClass1 } from '../pages/workoutPage';

test('Wrokout form Filling', async ({ page }) => {
 await page.goto("https://testautomationpractice.blogspot.com/");
 let obj =new NewClass1(page);
 await obj.sendKeys();
 
});
