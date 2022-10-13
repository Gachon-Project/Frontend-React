import React, {Component} from 'react';

class Myr extends Component {
    render() {
      return(
        <section id="Img_result">
          <div class="ctn">
            <div class="con1">
            </div>
            <div class="con2">
              <div class="Img_dvs">
                <div class="Img_col">
                  <img className='Img'></img>
                  <p>[음식이름]</p>
                </div>
                <div class="Img_col">
                  <img className='Img'></img>
                  <p>[음식이름]</p>
                </div>
                <div class="Img_col">
                  <img className='Img'></img>
                  <p>[음식이름]</p>
                </div>
              </div>
            </div>
            <div class="con3">
              <a href="/" class="buttonContainer">냉장고 넣기</a>
            </div>
          </div>
        </section>
      );
    }
  }

  export default Myr;