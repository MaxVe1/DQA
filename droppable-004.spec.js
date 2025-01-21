import { test, expect } from '@playwright/test';

test('drop-four + asserts', async ({ page }) => {
  // open main url
  await page.goto('https://demoqa.com/droppable');
  await page.waitForSelector('#droppableContainer > h1');

  // open revert tab
  await page.locator('text=Revert Draggable').click();
  await expect(page.locator('#droppableContainer > h1')).toHaveText('Droppable');
  await page.pause();  
  // checking texts in all boxes
  await expect(page.locator('#revertable')).toHaveText('Will Revert');    
  await expect(page.locator('#notRevertable')).toHaveText('Not Revert');
  await expect(page.locator('#droppable')).toHaveText('Drop here'); 
  // dragTo the 1st item (revertable) in big box
  await page.locator('#revertable').dragTo(page.locator('#dropabble'));
  await expect(page.locator('#droppable')).toHaveText('Dropped!');
  //checking classes in big box 
  await expect(page.locator('#droppable')).not.toHaveClass('ui-state-highlight');
  
  // dragTo the 2nd item in big box
  await page.locator('#notRevertable').dragTo(page.locator('#dropabble'));
  await expect(page.locator('#droppable')).toHaveText('Dropped!'); 

  // checking update class-name in main box in DOM-tree
  await expect(page.locator('#droppable')).toHaveClass('ui-state-highlight');
 
});

