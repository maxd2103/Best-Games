import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'anleitung-text',
  styleUrl: 'anleitung-text.css',
  shadow: true,
})

export class AnleitungText {
@Prop() text:string;
  render() {
    return (
              <p>{this.text}</p>
      
    );
  }

}
