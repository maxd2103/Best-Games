import { newSpecPage } from '@stencil/core/testing';
import { ButtonGenerate } from '../button-generate';

describe('button-generate', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ButtonGenerate],
      html: `<button-generate></button-generate>`,
    });
    expect(page.root).toEqualHtml(`
      <button-generate>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </button-generate>
    `);
  });
});
