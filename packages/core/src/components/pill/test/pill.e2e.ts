import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest.describe('pill', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto(`pill/test/basic`);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
