import { Component, h, } from '@stencil/core';

@Component({
  tag: 'slideshow-component',
  styleUrl: 'slideshow-component.css',
  shadow: true,
})

export class SlideshowComponent {

 
  
  render() {
    return (
      <div class="simpleSlides">
  <img class="slides animate-left" src="/src/components/slideshow-component/img-slideshow/memorie.png"/>
  <img class="slides animate-left" src="/src/components/slideshow-component/img-slideshow/spacepilot.png"/>
  <img class="slides animate-left" src="/src/components/slideshow-component/img-slideshow/tictactoe.png"/>
</div>
    );

  }

}
