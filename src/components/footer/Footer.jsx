import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Selva</h1>

        {/* nav list */}
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        {/* socials */}
        <div className="footer__social">
          <a
            href="https://github.com/"
            className="footer__social-link"
            target={"_blank"}
          >
            <i className="uil uil-github-alt"></i>
          </a>
          <a
            href="https://linkedin.com/"
            className="footer__social-link"
            target={"_blank"}
          >
            <i className="uil uil-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/"
            className="footer__social-link"
            target={"_blank"}
          >
            <i className="bx bxl-instagram"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Selva Ganesh. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
