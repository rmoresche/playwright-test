import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto(process.env.VERCEL_URL || 'http://localhost:3000');
});

test.describe('Add fruit', () => {
  test('Should contain 3 elements on the list and a fruit called test', async ({ page }) => {
    const fruitAdded = {name: 'test'}
    
    await page.locator('renato').click();
    
    await page.locator('input').fill('test');
    
    await page.locator('text=Add fruit').click();

    await expect(page.locator('li')).toHaveCount(3);

    await expect(page.locator('li:nth-child(3)')).toContainText(fruitAdded.name)
  });
});
