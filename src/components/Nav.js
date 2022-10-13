import React, {Component} from 'react';

class Nav extends Component {
    render() {
      
      return(
        <nav id="nav">
          <div class="nav__inner container">
            <div class="nav__menu">
              <ul>
                <li>
                  <a href="/" onClick={function(e){
                    e.preventDefault();
                    this.props.onChangeMode('home');
                  }.bind(this)}>HOME</a>
                </li>
                <li>
                  <a href="/myr" onClick={function(e){
                    e.preventDefault();
                    this.props.onChangeMode('myr');
                  }.bind(this)}>나의 냉장고</a>
                </li>
                <li>
                  <a href="/recipe" onClick={function(e){
                    e.preventDefault();
                    this.props.onChangeMode('recipe');
                  }.bind(this)}>레시피</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
    }
  }

  export default Nav;