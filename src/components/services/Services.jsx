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
              Product <br /> Designer
            </h3>
          </div>

          <span className="services__button" onClick={() => setCurrentModal(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          {/* modal */}
          <div
            className={`services__modal ${
              currentModal === 1 ? `active__modal` : ``
            }`}
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => setCurrentModal(0)}
              ></i>
              <h3 className="services__modal-title">Product Designer</h3>
              Service with more than 3 years of experience.Providing quality
              work to clients and companies.
              <p className="services__modal-description"></p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web Site Development.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I create apis.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I develop servers.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I develop apis interactions.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I develop databases.</p>
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
              Ui/Ux <br /> Desinger
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
            className={`services__modal ${
              currentModal === 2 ? `active__modal` : ``
            }`}
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => setCurrentModal(0)}
              ></i>
              <h3 className="services__modal-title">Ui/Ux Designer</h3>
              Service with more than 3 years of experience.Providing quality
              work to clients and companies.
              <p className="services__modal-description"></p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web Site Development.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I create apis.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I develop servers.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I develop apis interactions.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I develop databases.</p>
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
              Visual <br /> Designer
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
            className={`services__modal ${
              currentModal === 3 ? `active__modal` : ``
            }`}
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => setCurrentModal(0)}
              ></i>
              <h3 className="services__modal-title">Visual Designer</h3>
              Service with more than 3 years of experience.Providing quality
              work to clients and companies.
              <p className="services__modal-description"></p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web Site Development.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I create apis.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I develop servers.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I develop apis interactions.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I develop databases.</p>
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
