import { test, expect } from '@playwright/test';

/** working now */
test('dragTo-commitquality.com-00+ asserts', async ({ page }) => {
  await page.goto('https://commitquality.com/practice-drag-and-drop');
  //DragTo
  await page.locator('#small-box').dragTo(page.locator('.large-box'));   
});

/** Working now */
test('dragTo-commitquality.com-01+ asserts', async ({ page }) => {
  await page.goto('https://commitquality.com/practice-drag-and-drop');
  await page.locator('#small-box').hover();  
  await page.mouse.down();                
  await page.locator('#small-box').hover();  
  await page.mouse.up();              

});

/** Fail now
test('demoqa-01', async ({ page }) => {

  await page.goto('https://demoqa.com/droppable');
  //DragTo
  await page.locator('#draggable').dragTo(page.locator("#dropabble"));  
  //await page.locator('#small-box').hover();  
  //await page.mouse.down();                
  //await page.locator('#small-box').hover();  
 // await page.mouse.up();  
  await page.pause();
}); 
*/
/** 
test('git test', async ({ page }) => {
  await page.goto('https://demoqa.com/droppable');
  //await page.goto('https://demoqa.com/')
  //await page.pause(); 
  //DragTo
  await page.locator('#draggable').dragTo(page.locator('#dropabble'));   
});

test('open00', async ({ page }) => {
  await page.goto('https://demoqa.com/');    
});
*/
test('open01 + asserts', async ({ page }) => {
  await page.goto('https://demoqa.com/droppable');

  await page.locator('text=Simple').click();
  await expect(page.locator('#droppableContainer > h1')).toHaveText('Droppable');
  await page.pause();  
  //await expect(page.locator('#droppable')).toBeVisible() 
  await expect(page.locator('#droppable > p')).toHaveCount(3); 
  await expect(page.locator('#droppable')).toHaveText('Drop here'); 
});

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

/** 
test('open02', async ({ page }) => {
  await page.goto('https://commitquality.com/practice-drag-and-drop');  
});

test('open03', async ({ page }) => {
  await page.goto('https://kitchen.applitools.com/');    
});
*/
/** Ok working  */
test('commitquality.com dragTo + assert -smallbox in large - ok', async ({ page }) => {
  //await expect('#root > div > div > div > div > div.large-box').toHaveText('Drag the small box here.');
  //.toHaveValue("Drag the small box here.")
  //toHaveText("Drag the small box here.");
  
  //toHaveText("Drag the small box here.");
  await page.goto("https://commitquality.com/practice-drag-and-drop");
  await expect(page.locator(".large-box")).toBeVisible();
  await expect(page.locator('.large-box')).toHaveText('Drag the small box here.');

  await page.locator('#small-box').dragTo(page.locator('.large-box'));  
  await expect(page.locator('.large-box')).toHaveText('Success!');
  await page.pause();                
  //await page.locator('#small-box').hover();  
  //await page.mouse.up();             
});
