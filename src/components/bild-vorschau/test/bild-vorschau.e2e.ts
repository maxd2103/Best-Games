import { newE2EPage } from '@stencil/core/testing';

describe('bild-vorschau', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bild-vorschau></bild-vorschau>');

    const element = await page.find('bild-vorschau');
    expect(element).toHaveClass('hydrated');
  });
});
