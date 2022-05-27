import { Component, h, } from '@stencil/core';

@Component({
  tag: 'slideshow-component',
  styleUrl: 'slideshow-component.css',
  shadow: true,
})

export class SlideshowComponent {

 
  
  render() {
    return (
      <div>
       <h2>Automatic Slideshow</h2>
<p>Change image every 2 seconds:</p>

<div class="slideshow-container">

<div class="mySlides fade">
  <div class="numbertext">1 / 3</div>
  <img src="img-slideshow/memorie.png" />
  <div class="text">Caption Text</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">2 / 3</div>
  <img src="src/components/slideshow-component/img-slideshow/img-slideshow/spacepilot.png" />
  <div class="text">Caption Two</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">3 / 3</div>
  <img src="src/components/slideshow-component/img-slideshow/tictactoe.png" />
  <div class="text">Caption Three</div>
</div>

</div>


<div>
  <span class="dot"></span> 
  <span class="dot"></span> 
  <span class="dot"></span> 
</div>
        
  
      </div>
    );

  }

}
