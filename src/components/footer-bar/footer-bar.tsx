// Maximilian Dotzler

import { Component, Host, h } from '@stencil/core';
@Component({
  tag: 'footer-bar',
  styleUrl: 'footer-bar.css',
  shadow: true,
})
export class FooterBar {

  render() {
    return (
      <Host>
        <footer>
              <div class="wrapper">
                <img id="" src="" alt=""/>
                  <nav class="footer">
                      <ul>
                          <li>
                              <a href="#">Impressum</a>
                          </li>
                          <li>
                              <a href="#">Datenschutz</a>
                          </li>
                      </ul>
                  </nav>
              </div>
          </footer>
      </Host>
    );
  }

}
