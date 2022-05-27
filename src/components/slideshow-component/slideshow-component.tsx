import { Component, h } from '@stencil/core';

@Component({
  tag: 'slideshow-component',
  styleUrl: 'slideshow-component.css',
  shadow: true,
})
export class SlideshowComponent {

  private handleClick = () => {
    alert('Received the button click!');
    }

  render() {
    return (
      <div>
        <div class="slideshow-container">
        
          <div class="mySlides fade">
            <div class="numbertext">1 / 3</div>
            <img src="img1.jpg" style="width:100%"/>
            <div class="text">Caption Text</div>
          </div>
        
          <div class="mySlides fade">
            <div class="numbertext">2 / 3</div>
            <img src="img2.jpg" style="width:100%"/>
            <div class="text">Caption Two</div>
          </div>
        
          <div class="mySlides fade">
            <div class="numbertext">3 / 3</div>
            <img src="img3.jpg" style="width:100%"/>
            <div class="text">Caption Three</div>
          </div>
        
          <a class="prev" onClick={this.handleClick}>&#10094;</a>
          <a class="next" onClick={this.handleClick}>&#10095;</a>
        </div>
        
        <div style="text-align:center">
          <span class="dot" onClick={this.handleClick}></span>
          <span class="dot" onClick={this.handleClick}></span>
          <span class="dot" onClick={this.handleClick}></span>
        </div>
      </div>
    );

  }

}
