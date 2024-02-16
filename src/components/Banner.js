import React from "react";
import Logo from "../img/money.png";
import "../App.scss";

function Banner() {
  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="banner-text text-left mt-4">
              <h1 className="title-font">
                Votre partenaire financier c'est <span className="text-customer"> Release Money </span> désormais. 
                
              </h1>
              <br/>
              <h6 style={{fontSize: "20px"}} className="title-font-2">
                Votre affaire est le notre. Vous ordonnez, on agit à votre place et les comptes se font après. 
              </h6>
            </div>
          </div>
          <div className="banner-image-mobile">
            <div className="col-xl-6 col-lg-6 d-lg-block">
              <div className="banner-area">
                  <img className="banner-image" src={Logo} alt="images" />
              </div>
            </div>
          </div>
          <div className="banner-image-desktop col-xl-6 col-lg-6 d-lg-block">
            <div className="banner-area">
              <img className="banner-image" src={Logo} alt="images" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
