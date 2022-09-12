import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest.describe('map-navigation', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto(`map-navigation/test/basic`);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
