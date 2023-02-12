import React, { useEffect } from "react";
import "./scrollup.css";

const ScrollUp = () => {

  const handleScrollUp = function () {
    const scrollUp = document.querySelector(".scrollup");
    if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll")
  }

  // side effects
  useEffect(() => {
    window.addEventListener("scroll", handleScrollUp);
    return () => window.removeEventListener("scroll", handleScrollUp)
  }, []);

  // actual jsx rendering
  return (
    <a href="#" className="scrollup">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
};

export default ScrollUp;
