import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'buttons-component',
  styleUrl: 'buttons-component.css',
  shadow: true,
})
export class ButtonsComponent {
  @Prop() text: string;
  @Prop() aussehen: string;

  render() {
    return (
      <button class={`btn ${this.aussehen}`} type="button">
        {/* Slot */}
        {this.text}
      </button>
    );
  }
}