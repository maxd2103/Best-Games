import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'button-generate',
  styleUrl: 'button-generate.css',
  shadow: true,
})
export class ButtonGenerate {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
