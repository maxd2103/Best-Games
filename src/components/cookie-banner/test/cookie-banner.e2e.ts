import { newE2EPage } from '@stencil/core/testing';

describe('cookie-banner', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cookie-banner></cookie-banner>');

    const element = await page.find('cookie-banner');
    expect(element).toHaveClass('hydrated');
  });
});
