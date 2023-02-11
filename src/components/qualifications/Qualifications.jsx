import React, { useState } from "react";
import "./qualifications.css";

const Qualifications = () => {
  const [qualificationIndex, setQualificationIndex] = useState(0);
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        {/* tabs */}
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
          {/* part-1 */}
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
                <h3 className="qualification__title">Web Design</h3>
                <span className="qualification__subtitle">
                  KGiSL Institute of Technology
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt calender-icon"></i>
                  2021 - Present
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
                <h3 className="qualification__title">Art Director</h3>
                <span className="qualification__subtitle">
                  KGiSL Institute of Technology
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt calender-icon"></i>
                  2021 - Present
                </div>
              </div>
            </div>
            {/* item-1 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">
                  KGiSL Institute of Technology
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt calender-icon"></i>
                  2021 - Present
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
                <h3 className="qualification__title">UX Expert</h3>
                <span className="qualification__subtitle">
                  KGiSL Institute of Technology
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt calender-icon"></i>
                  2021 - Present
                </div>
              </div>
            </div>
          </div>

          {/* part-2 */}
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
                <h3 className="qualification__title">Web Design2</h3>
                <span className="qualification__subtitle">
                  KGiSL Institute of Technology
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt calender-icon"></i>
                  2021 - Present
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
                <h3 className="qualification__title">Art Director</h3>
                <span className="qualification__subtitle">
                  KGiSL Institute of Technology
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt calender-icon"></i>
                  2021 - Present
                </div>
              </div>
            </div>
            {/* item-1 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">
                  KGiSL Institute of Technology
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt calender-icon"></i>
                  2021 - Present
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
