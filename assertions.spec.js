import { test, expect } from '@playwright/test';
/**  assertion ok
test('assertions++1', async ({ page }) => {

  await page.goto('https://kitchen.applitools.com/');
  await page.pause();
  //Asserions
  await page.locator('text=The Kitchen')
  await expect(page.locator('text=The Kitchen')).toHaveCount(1)

  if( await page.$('text=The Kitchen')){
     await page.locator('text=The Kitchen').click()
  }
  //await page.locator('#small-box').hover();  
  //await page.mouse.down();                
  //await page.locator('#small-box').hover();  
  //await page.mouse.up();              

});
*/