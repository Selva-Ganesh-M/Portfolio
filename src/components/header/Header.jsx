import React, { useEffect, useState } from "react";
import "./header.css";
import { Link } from "react-scroll"

const Header = () => {
  // menu toggler
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("#home")

  const handleHeaderScroll = function () {
    const header = document.querySelector(".header")
    if (this.scrollY >= 80) header.classList.add("scroll-header")
    else header.classList.remove("scroll-header")
  }


  //   side effects
  useEffect(
    () => {
      // closing the menu bar on app boot up
      setIsMenuOpen(false);

      // setting eventlistener to header
      window.addEventListener("scroll", handleHeaderScroll)

      return () => {
        window.removeEventListener("scroll", handleHeaderScroll);
      }

    }, []);


  useEffect(() => {
    if (isMenuOpen) setIsMenuOpen(false)
  }, [activeNav])

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Selva
        </a>

        <div className={isMenuOpen ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">

            {/* home */}
            <li className="nav__item">
              <Link
                to="home"
                smooth={true}
                duration={800}
                className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}
                onClick={() => setActiveNav("#home")}>
                <i className="uil uil-estate nav__icon"></i>Home
              </Link>
            </li>

            {/* about */}
            <li className="nav__item">
              <Link
                to="about"
                smooth={true}
                duration={800}
                className={activeNav === "#about" ? "nav__link active-link" : "nav__link"} onClick={() => setActiveNav("#about")}
              >
                <i className="uil uil-user nav__icon"></i>About
              </Link>
            </li>

            {/* skills */}
            <li className="nav__item">
              <Link
                to="skills"
                smooth={true}
                duration={800}
                className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}
                onClick={() => setActiveNav("#skills")}
              >
                <i className="uil uil-file-alt nav__icon"></i>Skills
              </Link>
            </li>

            {/* services */}
            <li className="nav__item">
              <Link
                to="services"
                smooth={true}
                duration={800}
                className={activeNav === "#services" ? "nav__link active-link" : "nav__link"} onClick={() => setActiveNav("#services")}
              >
                <i className="uil uil-briefcase-alt nav__icon"></i>Services
              </Link>
            </li>

            {/* portfolio */}
            <li className="nav__item">
              <Link
                to="portfolio"
                smooth={true}
                duration={800}
                className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"} onClick={() => setActiveNav("#portfolio")}
              >
                <i className="uil uil-scenery nav__icon"></i>Portfolio
              </Link>
            </li>

            {/* message */}
            <li className="nav__item">
              <Link
                to="contact"
                smooth={true}
                duration={800}
                className={activeNav === "#message" ? "nav__link active-link" : "nav__link"} onClick={() => setActiveNav("#message")}
              >
                <i className="uil uil-message nav__icon"></i>Contact
              </Link>
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
