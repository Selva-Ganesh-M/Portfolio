import React, { useEffect, useState } from "react";
import "./header.css";

const Header = () => {
  // menu toggler
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //   side effects
  useEffect(() => {
    // closing the menu bar on app boot up
    setIsMenuOpen(false);
  }, []);
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Selva
        </a>

        <div className={isMenuOpen ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i>Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i>About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i>Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i>Services
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i>Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i>Message
              </a>
            </li>
          </ul>

          {/* close */}
          <i
            className="uil uil-times nav__close"
            onClick={() => setIsMenuOpen(false)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => setIsMenuOpen(true)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
