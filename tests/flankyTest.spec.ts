import { test, expect } from '@playwright/test';
import { FlankyTestClass } from '../pages/flakyTest';

test('Flanky test', async ({ page }) => {
  await page.goto('https://www.sreenidhirajakrishnan.com/practice#section-16');

  const obj =new FlankyTestClass(page);
  await obj.clickflakyBtn();
  const resultTextPresent = await page.locator(obj.flakyResult).textContent();
  await expect(resultTextPresent).toMatch(/success|failure|error|failed/i);
  console.log("Result is"+resultTextPresent );
 
});