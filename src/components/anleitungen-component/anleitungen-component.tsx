
import { Component, h, Prop,  } from '@stencil/core';

@Component({
  tag: 'anleitungen-component',
  styleUrl: 'anleitungen-component.css',
  shadow: true,

})
export class AnleitungenComponent {
  @Prop({
    mutable: true,
    reflect: true,
  })
  @Prop()
  header: string;
  @Prop() appearance: string;
  @Prop() isopen: boolean;

  private handleCancel = () => {
    this.isopen = false;
  };

  render() {
    return (
      <div class={this.isopen ? 'modal-wrapper isopen' : 'modal-wrapper'}>
        <div class="modal-overlay" onClick={this.handleCancel} />
        <div class="modal">
          <div class="header">
            <h6>{this.header}</h6>
          </div>
          <div class="body">
            <slot />
          </div>
          <div class="footer">
          </div>
        </div>
      </div>
    );
  }
}
