import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest.describe('message-bar', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto(`message-bar/test/basic`);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
