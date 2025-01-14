import React, { useState } from 'react';
import "./header.css";

function Header() {

  /* ============== Toggle Menu ================== */
  const [toggleMenu, setToggleMenu] = useState(false);

  function handleToggleMenu(toggle){
    setToggleMenu(!toggle);
  }

  return (
    <header className='header'>
      <nav className="nav container">
        <a href="index.html" className="nav__logo">Maxx</a>
        <div className={toggleMenu ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">

            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#About" className="nav__link">
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>

            <li className="nav__item">
              <a href="#services" className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i> Services
              </a>
            </li>

            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
            
          </ul>

          <a onClick={() => handleToggleMenu(toggleMenu)}>
            <i className="uil uil-times nav__close"></i>
          </a>
        </div>

        <div className="nav__toggle">
          <a onClick={() => handleToggleMenu(toggleMenu)}>
            <i className="uil uil-apps"></i>
          </a>
        </div>
        
      </nav>
    </header>
  )
}

export default Header