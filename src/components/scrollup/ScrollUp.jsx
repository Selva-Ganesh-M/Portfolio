import React, { useEffect } from "react";
import "./scrollup.css";

const ScrollUp = () => {

  // side effects
  useEffect(() => {
    window.addEventListener("scroll", function () {
      const scrollUp = document.querySelector(".scrollup");
      if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    });
  }, []);

  // actual jsx rendering
  return (
    <a href="#" className="scrollup">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
};

export default ScrollUp;
