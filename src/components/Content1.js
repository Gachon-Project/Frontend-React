import React, {Component} from 'react';

class Content1 extends Component {
    render() {
      return(
        <section id="sliderType" class="slider__wrap nexon">
          <div class="slider__inner">
            <div class="slider">
              <div class="slider__img">
                <div class="desc">
                  <span>My refrigerator</span>
                  <h3>My Recipe</h3>
                  <p>
                    냉장고에 재료가 남아서 버려지고 있나요?<br />
                    남은 재료로 만들 수 있는 레시피를 확인하세요!
                  </p>
                  <div class="btn">
                    <a href="/"onClick={function(e){
                      e.preventDefault();
                      this.props.onChangeMode('imgupload')
                    }.bind(this)}>자세히 보기</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }
  }

  export default Content1;