import React, { useState } from "react";
import "./qualifications.css";

const Qualifications = () => {
  const [qualificationIndex, setQualificationIndex] = useState(0);
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        {/* tabs -> education/experience */}
        <div className="qualification__tabs">
          <div
            className="qualification__button button--flex"
            onClick={() => setQualificationIndex(0)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div
            className="qualification__button button--flex"
            onClick={() => setQualificationIndex(1)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        {/* sections */}
        <div className="qualification__sections">


          {/* education */}
          <div
            className={
              qualificationIndex === 0
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {/* item-1 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">CS Engineering</h3>
                <span className="qualification__subtitle">
                  KGiSL Institute of Technology
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt calender-icon"></i>
                  2017 - 2021
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* item-2 */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Higher Secondary</h3>
                <span className="qualification__subtitle">
                  Karapettai HSS
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt calender-icon"></i>
                  2015 - 2017
                </div>
              </div>
            </div>
            {/* item-1 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">SSLC</h3>
                <span className="qualification__subtitle">
                  Karapettai NHSS
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt calender-icon"></i>
                  2013 - 2015
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div
            className={
              qualificationIndex === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {/* item-1 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Associate Analyst</h3>
                <span className="qualification__subtitle">
                  Ugam Solutions
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt calender-icon"></i>
                  2021 - 6 months
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

          </div>


        </div>
      </div>
    </section>
  );
};

export default Qualifications;
