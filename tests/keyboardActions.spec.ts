import { test, expect } from '@playwright/test';
import { KeyActions } from '../pages/keyboardActions';

test('Keyboard Actions Test', async ({ page }) => {
  await page.goto('https://www.sreenidhirajakrishnan.com/practice');
    const object=new KeyActions(page);
    await object.typeAndPress('Hello world 123');
 await expect(page.locator(object.keyboardResult)).toContainText("Last key: ArrowUp");
});