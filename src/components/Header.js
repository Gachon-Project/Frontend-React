import React, {Component} from 'react';

class Header extends Component {
    render() {
      return(
        <header id="header">
          <div class="header__inner container1">
            <div class="header__empty">
            </div>
            <div class="header__logo">
              <a href="/" onClick={function(event){
                event.preventDefault();
                this.setState({
                  mode: 'home'
                });
              }.bind(this)}>
                <p>
                  Data <br></br>Shredder
                </p>
              </a>
            </div>
            <div class="header__empty">
            </div>
          </div>
        </header>
      );
    }
  }

  export default Header;