import { test, expect } from '@playwright/test';

/** working now */
test('open00', async ({ page }) => {
  await page.goto('https://demoqa.com/');    
});

test('drop-accept 002', async ({ page }) => {
  await page.goto('https://demoqa.com/droppable');

  // Starting Accept test Right now
  await page.locator('text=Accept').click();
  //Check text "Dropable" on this page 
  await expect(page.locator('#droppableContainer > h1')).toHaveText('Droppable');
  await page.pause();  
  
  //Check selectors
  await expect(page.locator('#droppable')).toHaveText('Drop here'); 
  await expect(page.locator('#notAcceptable')).toHaveText('Not Acceptable'); 

  await page.locator('#notAcceptable').dragTo(page.locator('#dropabble')); 
  await expect(page.locator('#droppable')).toHaveText('Drop here');  
  
  await page.locator('#acceptable').dragTo(page.locator('#dropabble'));
  await expect(page.locator('#droppable')).toHaveText('Dropped!');  
});

