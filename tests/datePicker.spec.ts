import { test, expect } from '@playwright/test';
import { DatePicker } from '../pages/datePicker';

test('Date Picker', async ({ page }) => {
  await page.goto('https://www.sreenidhirajakrishnan.com/practice#section-28');
  let dateOBj =new DatePicker(page);
  await dateOBj.showDate('2025-11-12');
  await expect(page.locator(dateOBj.dateResult)).toContainText('2025-11-12');
  
});