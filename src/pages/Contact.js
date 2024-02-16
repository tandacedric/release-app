import React from "react";

const Contact = () => {
  return (
    <>
      <div className="contact section-title mt-5">
        <div className="container text-white">
          <div className="row align-items-center">
            <div className="col-md-10 mx-auto">
              <div className="contact-title mb-5 mt-5">
                <h1 className="title-font title-font-size">Contactez-nous</h1>
                <p className="mt-4 mb-4 title-font-2">
                  Pour toute question ou demande de services, n'hésitez pas à nous contacter et nous vous recontacterons par mail ou par le numéro de téléphone que vous auriez fourni dans un bref délai
                </p>
              </div>
            </div>

            <div className="col-lg-10 mx-auto text-white">
              <div className="contact-form mb-5 mt-5">
                <form>
                  <div className="form-group">
                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Votre nom *"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nom de l'entreprise *"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Rôle dans l'entreprise *"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="col-12">
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Numéro de téléphone de l'entreprise *"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-12">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email de l'entreprise *"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Adresse de l'entreprise *"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Sujet *"
                        required
                      />
                    </div>
                  </div>
                 
                  <div className="form-group">
                    <div className="col-12">
                      <textarea
                        className="form-control"
                        placeholder="Rédigez votre message ici *"
                        required
                        rows="10"
                      />
                    </div>
                  </div>
                  <div className="col-12 text-center">
                    <button type="submit" className="btn mt-5">
                      Envoyer le message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
