import { newSpecPage } from '@stencil/core/testing';
import { ButtonsComponent } from '../buttons-component';

describe('buttons-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ButtonsComponent],
      html: `<buttons-component></buttons-component>`,
    });
    expect(page.root).toEqualHtml(`
      <buttons-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </buttons-component>
    `);
  });
});
