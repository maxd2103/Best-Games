import { Component, Host, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'anleitungen-component',
  styleUrl: 'anleitungen-component.css',
  shadow: true,
})
export class AnleitungenComponent {
  @Prop() anleitung:string;
  @Prop() spielname:string;
  @Element() el:HTMLElement;

  render() {
    return (
      <Host>
        <div class="anleitungText">
        <h5 class="spielname">{this.spielname}</h5>
        <p id="anleitung">{this.anleitung}</p>
        </div>
      </Host>
    );
  }
 
}
