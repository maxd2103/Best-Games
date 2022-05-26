import { newE2EPage } from '@stencil/core/testing';

describe('anleitungen-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<anleitungen-component></anleitungen-component>');

    const element = await page.find('anleitungen-component');
    expect(element).toHaveClass('hydrated');
  });
});
