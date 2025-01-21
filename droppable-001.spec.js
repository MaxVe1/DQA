import { test, expect } from '@playwright/test';

//Check opening main url
test('open00', async ({ page }) => {
  await page.goto('https://demoqa.com/');    
});

//Check Droppable -Simple
test('demoqa-01', async ({ page }) => {

  const source = `page.locator('#draggable')`;
  const target = `page.locator('#dropabble')`;
  await page.goto('https://demoqa.com/droppable');
  await page.pause(); 
  await expect(page.locator('#droppableContainer > h1')).toHaveText('Droppable');
  
  // click on simple
  await page.locator('#droppableExample-tab-simple').click();
  await page.locator('#draggable').hover();   
  await page.mouse.down(); 

  await expect(page.locator('#droppable')).toHaveText('Drop here'); // Check box-2 before tests
  await page.locator(source).dragTo(page.locator(target));
  await expect(page.locator('#droppable')).toHaveText('Dropped!'); // Check box-2 after tests 
});
  
//Check Independent Alternative Drag-And-Drop
test('drop-independent', async ({ page }) => {

  await page.goto("https://commitquality.com/practice-drag-and-drop");
  await expect(page.locator(".large-box")).toBeVisible();

  await expect(page.locator('.large-box')).toHaveText('Drag the small box here.');// Check box-2 before tests
  await page.locator('#small-box').dragTo(page.locator('.large-box'));  
  await expect(page.locator('.large-box')).toHaveText('Success!'); // Check box-2 after tests 
           
});
 