function Nav() {
  return(
    <nav id="nav">
      <div class="nav__inner container">
        <div class="nav__menu">
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/myr">나의 냉장고</a>
            </li>
            <li>
              <a href="/recipe">레시피</a>
            </li>
            <li>
              <a href="/mart">마트검색</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  ); 
}

export default Nav;