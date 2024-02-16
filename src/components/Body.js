import React from "react";
import { Link } from "react-router-dom";
import Portfolio from "./Portfolio";
import "../App.scss";
import LetsWorkTogether from "./LetsWorkTogether";
import Services from "pages/Services";

const Body = () => {
  return (
    <>
      <section className="about-us-area text-white">
        <div className="container text-center">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="about-us-text-area mb-5 mt-5">
                <h2 className="about-us-text title-font-3">
                  Nous sommes spécialisé dans le paiement de salaire mensuel et annuel, les avances de trésorerie 
                  <br />
                  les transferts d'argent mobile et dans l'achat de crédit de communication.
                </h2>
                <p className="mt-4 mb-4 title-font-2">
                Nous sommes indispensable pour soutenir et optimiser la gestion financière et la connectivité de votre entreprise, offrant une plateforme centralisée pour le traitement des salaires, les avances de trésorerie, les transferts d'argent Mobile Money (MTN et ORANGE) et l'achat de crédit de communication. Grâce à ses fonctionnalités intuitives et à son accès 24/7, notre site web permet une gestion efficace des flux monétaires et des communications, offrant ainsi un avantage concurrentiel précieux à votre entreprise.
                 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Portfolio />

      {/* <section className="lead">
        <div className="container text-center">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="lead-title text-white mb-5 mt-4">
                <h1 className="title-font">Travaillons ensemble</h1>
                <p className="mt-4 mb-4 title-font-2">
                  Scaling-up your business is our mission!
                </p>
                <Link to="/contact">
                  <button className="btn text-white">Contact</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <Services />
      <LetsWorkTogether />
    </>
  );
};

export default Body;
