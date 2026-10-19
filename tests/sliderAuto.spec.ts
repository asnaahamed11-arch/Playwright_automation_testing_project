import { test, expect } from '@playwright/test';
import { testData } from '../testData/testData';
import { sliderAutomation } from '../pages/sliderAuto';

test('Automation page slider', async ({ page }) => {
  await page.goto(testData.url);
  let slider=new sliderAutomation(page);
  await slider.movingSliders('200','-20');
  page.pause();

});