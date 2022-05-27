import { newE2EPage } from '@stencil/core/testing';

describe('buttons-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<buttons-component></buttons-component>');

    const element = await page.find('buttons-component');
    expect(element).toHaveClass('hydrated');
  });
});
