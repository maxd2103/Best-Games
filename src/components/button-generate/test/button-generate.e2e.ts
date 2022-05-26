import { newE2EPage } from '@stencil/core/testing';

describe('button-generate', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<button-generate></button-generate>');

    const element = await page.find('button-generate');
    expect(element).toHaveClass('hydrated');
  });
});
