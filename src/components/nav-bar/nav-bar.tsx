// Maximilian Dotzler

import { Component, Host, h } from '@stencil/core';
@Component({
  tag: 'nav-bar',
  styleUrl: 'nav-bar.css',
  shadow: true,
})
export class NavBar {

  render() {
    return (
      <Host>
        <header>
                <div class="wrapper">
                    <img id="" src="" alt=""/>
                    <nav class="main">
                        <ul>
                            <li>
                                <a href="home.html">Startseite</a>
                            </li>
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
                    </nav>
                </div>
            </header>
      </Host>
    );
  }

}
