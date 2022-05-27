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
        <slot> 
        
        <div class="d-flex justify-content-center mt-5">
        <div class="card p-3 cookie"><span>Wir benutzen Cookies.</span><a href="#">Mehr Informationen<i class="fa fa-angle-right ml-2"></i></a>
        <div class="mt-4 text-right"><span class="mr-3 decline">Ablehnen</span><button class="btn btn-light btn-sm" type="button">Akzeptieren</button></div>
        </div>
        </div>

        </slot>
      </Host>
    );
  }

}
