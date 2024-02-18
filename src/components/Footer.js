import React from "react";
import { Link } from "react-router-dom";

{
  /* <footer>
<div className="container text-white">
  <div className="row align-items-center">
    <div className="col-sm-12">
      <p className="mt-4 mb-4 title-font-2">
        ©2019 A. All rights reserved.
      </p>
    </div>
  </div>
</div>
</footer> */
}

const Footer = () => {
  return (
    <footer class="w-100 py-4 flex-shrink-0">
      <div
        style={{ paddingLeft: "7%", paddingRight: "7%" }}
        class="container-fluid text-left py-4"
      >
        <div class="row gy-4 gx-5">
          <div class="col-lg-4 col-md-4">
            <h5 class="h1 text-white title-font">Release Money</h5>
            <p class=" text-white title-font-2">
              Partenaire spécial des entreprises camerounaises dans des besoins
              financiers
            </p>
            <p class=" text-white mb-0 title-font-2">
              &copy; Copyright. Tous droits réservés{" "}
              <a class="text-primary" href="/">
                ETS RELEASE
              </a>
            </p>
          </div>
          <div class="col-lg-2 col-md-2">
            <h5 class="text-white mb-3  service-name">Liens utiles</h5>
            <ul class="list-unstyled text-muted">
              <li>
                <a href={"#"}>Acceuil</a>
              </li>
              <li>
                <a href={"#about-us"}>A propos de nous</a>
              </li>
              <li>
                <a href={"#service"}>Services</a>
              </li>
              <li>
                <a href={"#partner"}>Partenaires</a>
              </li>
              <li>
                <a href={"#contact"}>Contact</a>
              </li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-3">
            <h5 class="text-white mb-3 service-name">Nous contacter</h5>
            <p class="text-white title-font-2">
              Carefour Dounier, Manassa, Nfou
            </p>
            <p class="text-white title-font-2">Tel: +237 691681456</p>
            <p class="text-white title-font-2">RCCM: RC/YAE/2023/A/187</p>
          </div>
          <div class="col-lg-3 col-md-3">
            <h5 class="text-white mb-3 service-name">Horaire de service</h5>
            <p class="text-white title-font-2">Lundi à Mercredi: 08h-17h</p>
            <p class="text-white title-font-2">Jeudi à Vendredi: 08h-16h</p>
            <p class="text-white title-font-2">
              Samedi et jours fériés: 09h-14h
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
