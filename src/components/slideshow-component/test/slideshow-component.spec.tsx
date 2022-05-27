import { newSpecPage } from '@stencil/core/testing';
import { SlideshowComponent } from '../slideshow-component';

describe('slideshow-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SlideshowComponent],
      html: `<slideshow-component></slideshow-component>`,
    });
    expect(page.root).toEqualHtml(`
      <slideshow-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </slideshow-component>
    `);
  });
});
