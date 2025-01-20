import { test, expect } from '@playwright/test';

/** working now */


test('drop-accept + asserts', async ({ page }) => {
  await page.goto('https://demoqa.com/droppable');

  await page.locator('text=Accept').click();
  await expect(page.locator('#droppableContainer > h1')).toHaveText('Droppable');
  await page.pause();  
  //await expect(page.locator('#droppable')).toBeVisible() 
  await expect(page.locator('#droppable > p')).toHaveCount(3); 
  await expect(page.locator('#droppable')).toHaveText('Drop here'); 
  await expect(page.locator('#notAcceptable')).toHaveText('Not Acceptable'); 

  await page.locator('#notAcceptable').dragTo(page.locator('#dropabble')); 
  await expect(page.locator('#droppable')).toHaveText('Drop here');  
  
  await page.locator('#acceptable').dragTo(page.locator('#dropabble'));
  await expect(page.locator('#droppable')).toHaveText('Dropped!');  
});

