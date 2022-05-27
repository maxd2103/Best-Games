import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'cookie-banner',
  styleUrl: 'cookie-banner.css',
  shadow: true,
})
export class CookieBanner {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
