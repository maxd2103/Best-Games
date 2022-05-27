import { newSpecPage } from '@stencil/core/testing';
import { CookieBanner } from '../cookie-banner';

describe('cookie-banner', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CookieBanner],
      html: `<cookie-banner></cookie-banner>`,
    });
    expect(page.root).toEqualHtml(`
      <cookie-banner>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cookie-banner>
    `);
  });
});
