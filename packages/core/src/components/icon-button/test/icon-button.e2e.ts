import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest.describe('icon-button', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto(`icon-button/test/basic`);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
