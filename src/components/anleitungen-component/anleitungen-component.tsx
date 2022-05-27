
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
          <anleitung-text text="Das Spiel besteht aus einem Spielfeld, das 18 Karten enthält. Auf diesen sind neun verschiedene Motive abgebildet, die jeweils doppelt vorkommen. Die Karten sind von Beginn an umgedeckt und zeigen dem Spieler nur die Rückseite, die bei allen Karten gleich aussieht. Das Ziel des Spiels ist es durch Umdrehen der Karten alle identischen Kartenpaare zu finden. Dabei dürfen aber immer nur zwei Karten gleichzeitig umgedreht werden. Sind diese nicht identisch, müssen sie wieder auf die Rückseite gedreht werden. Sind sie identisch, bleiben sie offen liegen. Die Karten werden nur zu Beginn des Spiels gemischt, während dem Spiel behalten alle Karten ihre Position bei. Der Spieler muss sich also merken, wo welche Karten liegen, um die Paare zu finden und das Spiel zu gewinnen. Sind alle Kartenpaare aufgedeckt, ist das Spiel zu Ende und der Spieler kann eine neue Runde beginnen.
  "></anleitung-text>
            <slot />
          </div>
          <div class="footer">
          </div>
        </div>
      </div>
    );
  }
}
