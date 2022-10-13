import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Nav extends Component {
    render() {
      
      return(
        <nav id="nav">
          <div class="nav__inner container">
            <div class="nav__menu">
              <ul>
                <Link to="/">HOME</Link>
                <Link to="/Myr">나의 냉장고</Link>
                <Link to="/Myr">레시피</Link>
              </ul>
            </div>
          </div>
        </nav>
      );
    }
  }

  export default Nav;