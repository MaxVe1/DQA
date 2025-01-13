import { test } from '@playwright/test';


test('basic test', async ({ page }) => {
  await page.goto('https://demoqa.com/droppable');
  //DragTo
  await page.locator('#draggable').dragTo(page.locator("#dropabble"));  
 
});

/** 
test('manual test', async ({ page }) => {
  await page.goto('https://commitquality.com/practice-drag-and-drop');

  await page.locator('#small-box').hover();  
  await page.mouse.down();                
  await page.locator('#small-box').hover();  
  await page.mouse.up();                  

  
});
*/