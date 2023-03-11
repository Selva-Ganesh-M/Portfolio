import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [currentModal, setCurrentModal] = useState(0);
  return (
    <section className="services section" id={"services"}>
      {/* header */}
      <h2 className="section__title">services</h2>
      <div className="section__subtitle">What I offer</div>

      {/* body */}
      <div className="services__container container grid">
        {/* item-1 */}
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Frontend <br /> Developer
            </h3>
          </div>

          <span className="services__button" onClick={() => setCurrentModal(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          {/* modal */}
          <div
            className={`services__modal ${currentModal === 1 ? `active__modal` : ``
              }`}
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => setCurrentModal(0)}
              ></i>
              <h3 className="services__modal-title">Frontend Developer</h3>
              Develop simple friendly user interfaces.
              <p className="services__modal-description"></p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I develop UI/UX.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I develop api interactions.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I deploy sites.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* item-2 */}
        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Backend <br /> Developer
            </h3>
          </div>

          <span className="services__button">
            View More
            <i
              className="uil uil-arrow-right services__button-icon"
              onClick={() => setCurrentModal(2)}
            ></i>
          </span>

          {/* modal */}
          <div
            className={`services__modal ${currentModal === 2 ? `active__modal` : ``
              }`}
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => setCurrentModal(0)}
              ></i>
              <h3 className="services__modal-title">Backend Developer</h3>
              I create servers with nodeJs and expressJs, which handle various and routes and handles api interactions.
              <p className="services__modal-description"></p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Server development.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I develop apis interactions to client and database.</p>
                </li>

              </ul>
            </div>
          </div>
        </div>

        {/* item-3 */}
        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
              Database <br /> Developer
            </h3>
          </div>

          <span className="services__button">
            View More
            <i
              className="uil uil-arrow-right services__button-icon"
              onClick={() => setCurrentModal(3)}
            ></i>
          </span>

          {/* modal */}
          <div
            className={`services__modal ${currentModal === 3 ? `active__modal` : ``
              }`}
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => setCurrentModal(0)}
              ></i>
              <h3 className="services__modal-title">Database Developer</h3>
              Develop robust Databases which holds multiple data models.
              <p className="services__modal-description"></p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I develop data models.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I perform data validation.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I develop database interactions with the server.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
