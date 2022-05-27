import { Component, h } from '@stencil/core';

@Component({
  tag: 'slideshow-component',
  styleUrl: 'slideshow-component.css',
  shadow: true,
})
export class SlideshowComponent {

  private handleClick1 = () => {
    alert('Received the button click!');
    }
    private handleClick2 = () => {
      alert('Received the button click!');
      }
      private handleClick3 = () => {
        alert('Received the button click!');
        }

  render() {
    return (
      <div>
        <div class="slideshow-container">
        
          <div class="mySlides fade">
            <div class="numbertext">1 / 3</div>
            <img src="img1.jpg" />
            <div class="text">Caption Text</div>
          </div>
        
          <div class="mySlides fade">
            <div class="numbertext">2 / 3</div>
            <img src="img2.jpg"/>
            <div class="text">Caption Two</div>
          </div>
        
          <div class="mySlides fade">
            <div class="numbertext">3 / 3</div>
            <img src="img3.jpg" />
            <div class="text">Caption Three</div>
          </div>
        
          <a class="prev" onClick={this.handleClick1}>&#10094;</a>
          <a class="next" onClick={this.handleClick2}>&#10095;</a>
        </div>
        
        <div id="eins">
          <span class="dot" onClick={this.handleClick1}></span>
          <span class="dot" onClick={this.handleClick2}></span>
          <span class="dot" onClick={this.handleClick3}></span>
        </div>
      </div>
    );

  }

}
