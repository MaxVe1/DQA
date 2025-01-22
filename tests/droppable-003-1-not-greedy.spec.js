import { test, expect } from '@playwright/test';

/** working now */


test('drop-propagation-not-greedy-outer-first', async ({ page }) => {
  //open main url
  await page.goto('https://demoqa.com/droppable');
  //check droppable Title
  await expect(page.locator('#droppableContainer > h1')).toHaveText('Droppable');
  //open tab 
  await page.locator('text=Prevent Propogation').click();
  
  await page.pause();  
  //checking texts in upper boxes
  
  await expect(page.locator('#drogBox')).toHaveText('Drag Me'); 
  await expect(page.locator('##notGreedyDropBox > p')).toHaveText('Outer droppable'); 
  await expect(page.locator('#notGreedyInnerDropBox > p')).toHaveText('Inner droppable (not greedy)');

  //checking other and action (Upper-Box) 
  //move drogBox into outer greedy-box and checking
  await page.locator('#drogBox').dragTo(page.locator('##notGreedyDropBox > p')); 
  await expect(page.locator('##notGreedyDropBox > p')).toHaveText('Dropped!');
  await expect(page.locator('#notGreedyInnerDropBox > p')).toHaveText('Inner droppable (not greedy)');
  //move drogBox into inner greedy-box and checking
  await page.locator('#drogBox').dragTo(page.locator('#notGreedyInnerDropBox > p'));
  await expect(page.locator('##notGreedyDropBox > p')).toHaveText('Dropped!');
  await expect(page.locator('#notGreedyInnerDropBox > p')).toHaveText('Dropped!');
 });

 test('drop-propagation-not-greedy-inner-only', async ({ page }) => {
  //open main url
  await page.goto('https://demoqa.com/droppable');
  //check droppable Title
  await expect(page.locator('#droppableContainer > h1')).toHaveText('Droppable');
  //open tab 
  await page.locator('text=Prevent Propogation').click();
  
  await page.pause();

  //checking texts in upper boxes  
  await expect(page.locator('#drogBox')).toHaveText('Drag Me'); 
  await expect(page.locator('##notGreedyDropBox > p')).toHaveText('Outer droppable'); 
  await expect(page.locator('#notGreedyInnerDropBox > p')).toHaveText('Inner droppable (not greedy)');

  //checking other and action (Upper-Box)   
  //move drogBox into inner greedy-box and checking
  await page.locator('#drogBox').dragTo(page.locator('#notGreedyInnerDropBox > p'));
  await expect(page.locator('##notGreedyDropBox > p')).toHaveText('Dropped!');
  await expect(page.locator('#notGreedyInnerDropBox > p')).toHaveText('Dropped!');
 });

