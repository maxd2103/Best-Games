import { newSpecPage } from '@stencil/core/testing';
import { AnleitungText } from '../anleitung-text';

describe('anleitung-text', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AnleitungText],
      html: `<anleitung-text></anleitung-text>`,
    });
    expect(page.root).toEqualHtml(`
      <anleitung-text>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </anleitung-text>
    `);
  });
});
