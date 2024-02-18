import React from "react";
import { Link } from "react-router-dom";
import Img from "../img/sheet.png"

const LetsWorkTogether = () => {
  return (
    <section className="lead">
      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col-12">
            <div className="lead-title text-white mb-5 mt-4">
              <h1 className="title-font">Travaillons ensemble</h1>
              <p className="mt-4 mb-4 title-font-2">
                Développer votre entreprise est notre mission !
              </p>
              {/* <Link to="/contact">
                <button className="btn text-white">Contact</button>
              </Link> */}
              <a target="_blank" href="https://docs.google.com/spreadsheets/d/1yt2FF_-Uv4Hu00GUtoiE6654r6bO1iazQIi8_JYFOd8/edit?usp=sharing">
                <button className="btn text-white">
                  <img src={Img} style={{width: "32px", height: "32px"}} />
                  Téléchargez notre fiche
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsWorkTogether;
