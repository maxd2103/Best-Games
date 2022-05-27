import { newE2EPage } from '@stencil/core/testing';

describe('anleitung-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<anleitung-text></anleitung-text>');

    const element = await page.find('anleitung-text');
    expect(element).toHaveClass('hydrated');
  });
});
