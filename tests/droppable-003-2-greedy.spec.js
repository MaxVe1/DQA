import { test, expect } from '@playwright/test';

/** working now */


test('drop-propagation-greedy', async ({ page }) => {
  //open main url
  await page.goto('https://demoqa.com/droppable');
  //check droppable Title
  await expect(page.locator('#droppableContainer > h1')).toHaveText('Droppable');
  //open tab 
  await page.locator('text=Prevent Propogation').click();  
  //await page.pause();  

  //checking texts in upper boxes  
  await expect(page.locator('#drogBox')).toHaveText('Drag Me'); 
  await expect(page.locator('#greedyDropBox > p')).toHaveText('Outer droppable'); 
  await expect(page.locator('#greedyDropBoxInner > p')).toHaveText('Inner droppable (greedy)');
  //checking other and action (Bottom-Box)
  //move drogBox into outer greedy-box
  await page.locator('#drogBox').dragTo(page.locator('#greedyDropBoxInner > p'));
  await expect(page.locator('#greedyDropBox > p')).toHaveText('Outer droppable'); 
  await expect(page.locator('#greedyDropBoxInner > p')).toHaveText('Dropped!');  
});

