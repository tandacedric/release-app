import React from "react";
import LetsWork from "../components/LetsWorkTogether";

// service icons
import icon1 from "../img/services/salaire.png";
import mail from "../img/services/mail.png";
import seo from "../img/services/seo.png";
import content from "../img/services/content.png";
import share from "../img/services/share.png";
import web from "../img/services/web.png";

const Services = () => {
  const serviceIcons = [
    {
      id: "1",
      title: "Paiement de salaire",
      image: icon1,
      description:
        "Nous offrons des solutions de paiement de salaires fiables et rapides, garantissant que vos employés sont payés à temps, chaque fois.",
    },
    {
      id: "2",
      title: "Avances de trésorerie",
      image: mail,
      description:
        "Besoin d'un accès rapide à des fonds ? Notre service d'avances de trésorerie vous permet d'obtenir les liquidités nécessaires pour faire face à vos besoins financiers urgents.",
    },
    {
      id: "3",
      title: "Transfert d'Argent Mobile Money",
      image: seo,
      description:
        "Envoyez et recevez de l'argent facilement via notre kiosque de transfert d'argent Mobile Money, compatible avec les réseaux MTN et ORANGE.",
    },
    {
      id: "4",
      title: "Achat de Crédit de Communication",
      image: content,
      description:
        "Rechargez votre crédit de communication instantanément à partir de notre plateforme, disponible pour les principaux opérateurs téléphoniques.",
    },
    
  ];

  return (
    <>
      <div id="service"  className="services section-title mt-5">
        <div className="container text-white">
          <div className="row align-items-center">
            <div className="col-md-7 mx-auto">
              <div className="services-title mb-5 mt-5">
                <h1 className="title-font title-font-size">Services</h1>
                <p className="title-text mt-4 mb-4 title-font-2">
                  Nos services sont conçus pour les besoins de votre entreprise
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            {serviceIcons.map((service) => (
              <div className="col-12 col-lg-6" key={service.id}>
                <div className="service-boxes">
                  <div className="service-icon">
                    <img
                      className="service-icon-img mb-3"
                      src={service.image}
                      alt="instagram"
                    />
                  </div>
                  <div className="service-info-title">
                    <h3 style={{textAlign: "left"}} className="service-name title-font-2">
                      {service.title}
                    </h3>
                  </div>
                  <div className="service-info">
                    <p className="service-description text-left title-font-2 mt-3">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <LetsWork /> */}
    </>
  );
};

export default Services;
