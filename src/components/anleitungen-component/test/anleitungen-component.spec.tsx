import { newSpecPage } from '@stencil/core/testing';
import { AnleitungenComponent } from '../anleitungen-component';

describe('anleitungen-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AnleitungenComponent],
      html: `<anleitungen-component></anleitungen-component>`,
    });
    expect(page.root).toEqualHtml(`
      <anleitungen-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </anleitungen-component>
    `);
  });
});
