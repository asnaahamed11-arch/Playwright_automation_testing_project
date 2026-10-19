import { test, expect } from '@playwright/test';
import{testData} from '../testData/testData';
import { Slider } from '../pages/slider';
test('Slider Test', async ({ page }) => {
  await page.goto(testData.url1);
  let slide=new Slider(page);
  await slide.moveSliderToValue('80');
  await page.pause();


});