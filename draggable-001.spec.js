import { test, expect } from '@playwright/test';

//Check opening independent url
test('url-independent', async ({ page }) => {
  await page.goto("https://commitquality.com/practice-drag-and-drop");
});  
//Check opening main url
test('url-main', async ({ page }) => {
  await page.goto('https://demoqa.com/dragabble');    
});

//Check Draggable -Simple
test('draggable-01', async ({ page }) => {

  //const source = `page.locator('#draggable')`;
  //const target = `page.locator('#dropabble')`;
  await page.goto('https://demoqa.com/dragabble');

  
  await page.pause(); 
  //await expect(page.locator('#droppableContainer > h1')).toHaveText('Draggable');
  
  // click on simple
  await page.locator('text=Simple').click(); 
  await page.locator('#draggable').hover();   
  await page.mouse.down(); 
  //await page.mouse.down()
  await page.mouse.move(0, 100);
  await page.mouse.move(100, 100);
  await page.mouse.move(100, 0);
  await page.mouse.move(0, 0);

  //await expect(page.locator('#droppable')).toHaveText('Drop here'); // Check box-2 before tests
  //await page.locator(source).dragTo(page.locator(target));
  //await expect(page.locator('#droppable')).toHaveText('Dropped!'); // Check box-2 after tests 
});
  
//Check Independent Alternative Drag-And-Drop
test('drop-independent', async ({ page }) => {

  await page.goto("https://commitquality.com/practice-drag-and-drop");
  await expect(page.locator(".large-box")).toBeVisible();

  await expect(page.locator('.large-box')).toHaveText('Drag the small box here.');// Check box-2 before tests
  await page.locator('#small-box').dragTo(page.locator('.large-box'));  
  await expect(page.locator('.large-box')).toHaveText('Success!'); // Check box-2 after tests 
           
});
 