import { test, expect } from 'playwright/test';

test('homepage has title', async ({ page }) => {
  await page.goto('https://www.codemancers.com/');
  await expect(page).toHaveTitle(/Codemancers/);
});