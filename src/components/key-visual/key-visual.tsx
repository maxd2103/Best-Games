// Maximilian Dotzler

import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'key-visual',
  styleUrl: 'key-visual.css',
  shadow: true,
})
export class KeyVisual {

  render() {
    return (
      <Host>
        <div class="keyvisual">
        <div class="wrapper">
            <div class="text">
              <h2>Du möchtest deine Körper in From bringen?</h2>
              <h1>Nutze unsere Supplement</h1>
              <a class="button" href="#">Mehr erfahren</a>
            </div>
            <aside>
              <h2>Sonderangebote</h2>
              <ul>
                <li>
                  <a href="tic-tac-toe.html">TicTacToe</a>
                </li>
                <li>
                    <a href="sp.html">Space Pilot</a>
                </li>
                <li>
                    <a href="memorie.html">Memorie</a>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </Host>
    );
  }

}
