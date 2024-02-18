import React, { Component } from "react";
import { connect } from "react-redux";
import ImageContentHover from "react-image-hover";

class Testimonial extends Component {
  render() {
    return (
      <>
        <section id="testimonial" className="testimonial">
          <div class="row d-flex justify-content-center">
            <div class="col-md-10 col-xl-8 text-center">
              <h3 class="mb-4 title-font title-font-size">Témoignages</h3>
              <p class="mb-4 pb-2 mb-md-5 pb-md-0 title-font-2">
                Ces Témoignages en disent long sur la qualité de service que
                nous offons à nos partenaires.
              </p>
            </div>
          </div>

          <div class="row text-center">
            <div class="col-md-4 mb-5 mb-md-0">
              <div class="d-flex justify-content-center mb-4">
                <img
                  width="150"
                  height="150"
                  src="https://img.icons8.com/color/480/circled-user-male-skin-type-3--v1.png"
                  class="rounded-circle shadow-1-strong"
                  alt="circled-user-male-skin-type-3--v1"
                />
              </div>
              <h5 class="mb-3">Carlos Abokeng</h5>
              <h6 class="text-primary mb-3 title-font-3">
                CEO Founder / Honorable Construction
              </h6>
              <p class="px-xl-3 title-font-2">
                <i class="fas fa-quote-left pe-2"></i>Grâce à Release, la
                gestion de la paie de nos employés est devenue un processus
                simple et fluide. Leur service clientèle est exceptionnel,
                toujours prêt à répondre à nos besoins.
                <i class="fas fa-quote-right pe-2"></i>
              </p>
              <ul class="list-unstyled d-flex justify-content-center mb-0">
                <li>
                  <i class="fas fa-star fa-lg text-warning"></i>
                </li>
                <li>
                  <i class="fas fa-star fa-lg text-warning"></i>
                </li>
                <li>
                  <i class="fas fa-star fa-lg text-warning"></i>
                </li>
                <li>
                  <i class="fas fa-star fa-lg text-warning"></i>
                </li>
                <li>
                  <i class="fas fa-star-half-alt fa-lg text-warning"></i>
                </li>
              </ul>
            </div>
            <div class="col-md-4 mb-5 mb-md-0">
              <div class="d-flex justify-content-center mb-4">
                <img
                  width="150"
                  height="150"
                  src="https://img.icons8.com/color/480/user-female-circle--v1.png"
                  class="rounded-circle shadow-1-strong"
                  alt="circled-user-male-skin-type-3--v1"
                />
              </div>
              <h5 class="mb-3">Rody Doudou</h5>
              <h6 class="text-primary mb-3 title-font-3">CEO Founder / RobyCakes</h6>
              <p class="px-xl-3 title-font-2">
                <i class="fas fa-quote-left pe-2"></i>Release nous a permis de
                simplifier nos opérations financières en nous offrant une
                solution complète pour les avances de trésorerie. Leur
                plateforme conviviale nous fait gagner un temps précieux.
                <i class="fas fa-quote-right pe-2"></i>
              </p>
              <ul class="list-unstyled d-flex justify-content-center mb-0">
                <li>
                  <i class="fas fa-star fa-lg text-warning"></i>
                </li>
                <li>
                  <i class="fas fa-star fa-lg text-warning"></i>
                </li>
                <li>
                  <i class="fas fa-star fa-lg text-warning"></i>
                </li>
                <li>
                  <i class="fas fa-star fa-lg text-warning"></i>
                </li>
                <li>
                  <i class="fas fa-star fa-lg text-warning"></i>
                </li>
              </ul>
            </div>
            <div class="col-md-4 mb-0">
              <div class="d-flex justify-content-center mb-4">
                <img
                  width="150"
                  height="150"
                  src="https://img.icons8.com/color/480/name--v1.png"
                  class="rounded-circle shadow-1-strong"
                  alt="circled-user-male-skin-type-3--v1"
                />
              </div>
              <h5 class="mb-3">Dieudonné WATIO</h5>
              <h6 class="text-primary mb-3 title-font-3">Content Manager / Learndia Inc</h6>
              <p class="px-xl-3 title-font-2">
                <i class="fas fa-quote-left pe-2"></i>En tant que réseau social
                éducatif, Learndia nécessite une gestion financière efficace et
                transparente. Release nous fournit les outils nécessaires pour
                gérer nos finances en toute confiance, nous permettant de nous
                concentrer sur notre mission éducative.
                <i class="fas fa-quote-right pe-2"></i>
              </p>
              <ul class="list-unstyled d-flex justify-content-center mb-0">
                <li>
                  <i class="fas fa-star fa-lg text-warning"></i>
                </li>
                <li>
                  <i class="fas fa-star fa-lg text-warning"></i>
                </li>
                <li>
                  <i class="fas fa-star fa-lg text-warning"></i>
                </li>
                <li>
                  <i class="fas fa-star fa-lg text-warning"></i>
                </li>
                <li>
                  <i class="far fa-star fa-lg text-warning"></i>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    persons: state.team,
  };
};

export default connect(mapStateToProps)(Testimonial);
