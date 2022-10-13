import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
      var lists=[];
      var data=this.props.data;
      var i=0;
      while(i<data.length){
        lists.push(<li key={data[i].id}><a href={"/header_logs/"+data[i].id}>{data[i].title}</a></li>);
        i=i+1;
      }
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
              }}>
                <p>
                  Data <br></br>Shredder
                </p>
              </a>
            </div>
            <div class="header__menu">
              <ul>
                  {lists}
              </ul>
            </div>
          </div>
        </header>
      );
    }
  }

  export default Header;