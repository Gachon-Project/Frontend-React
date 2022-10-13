import React, {Component} from 'react';

class Footer extends Component {
    render() {
      return(
        <footer id="footerType">
          <div class="footer__inner">
            <div class="footer__imglogo">
              <article class="footer__image img1">
              </article>
              <article class="footer__image img2">
              </article>
              <article class="footer__image img3">
              </article>
            </div>
            <div class="footer__about">
              <p class="famous_saying">Manners Make Man</p>
              <p class="team_name">Team name : Data Shredder</p>
              <p class="copy">Data Shredder© Copyright 2022,<br/>All Rights Reserved</p>
            </div>
          </div>
        </footer>
      );
    }
  }

  export default Footer;