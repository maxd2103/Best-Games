import { newSpecPage } from '@stencil/core/testing';
import { BildVorschau } from '../bild-vorschau';

describe('bild-vorschau', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BildVorschau],
      html: `<bild-vorschau></bild-vorschau>`,
    });
    expect(page.root).toEqualHtml(`
      <bild-vorschau>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bild-vorschau>
    `);
  });
});
