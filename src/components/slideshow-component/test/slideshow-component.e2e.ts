import { newE2EPage } from '@stencil/core/testing';

describe('slideshow-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<slideshow-component></slideshow-component>');

    const element = await page.find('slideshow-component');
    expect(element).toHaveClass('hydrated');
  });
});
