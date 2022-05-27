import { Component, h } from '@stencil/core';

@Component({
  tag: 'bild-vorschau',
  styleUrl: 'bild-vorschau.css',
  shadow: true,
})
export class BildVorschau {

  render() {
    return (
      <div class="hauptbox">
      <div class="gallery">
      <a target="_blank" href="img_5terre.jpg">
        <img src="https://www.rd.com/wp-content/uploads/2019/10/tic-tac-toe-scaled.jpg?resize=2048" alt="Cinque Terre" width="600" height="400"/>
      </a>
      <div class="desc">Tic Tac Toe</div>
    </div>
    
    
    <div class="gallery">
      <a target="_blank" href="img_forest.jpg">
        <img src="https://linenideas.co.uk/StockPictures/HD/4005556223138.jpg" alt="Forest" width="600" height="400"/>
      </a>
      <div class="desc">Memorie</div>
    </div>
    
    
    <div class="gallery">
      <a target="_blank" href="img_lights.jpg">
        <img src="http://www.thegamescabin.com/wp-content/uploads/2015/09/EVERSPACE_ActionFreeze_Screenshot_0011.jpg" alt="Northern Lights" width="600" height="400"/>
      </a>
      <div class="desc">Spaceships</div>
    </div>
    </div>
    );
  }

}
