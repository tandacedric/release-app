import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { navItems } from "lib/data/navItems";
import Logo from "../../img/logo.png"

const Navbar = () => {
  return (
    <header className="header-transparent">
      <nav className="navbar navbar-expand-lg navbar-dark text-center">
        <div className="container">
          <a href="#" className="navbar-brand">
            <img className="banner-image" style={{width: "180px" }} src={Logo} alt="logos" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <i className="fi-xwluxl-three-bars-wide"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" style={{paddingBottom: "20px", justifyContent:"end"}} id="navbarSupportedContent">
            {navItems.map((item) => {
              return (
                <ul className="navbar-nav ml-auto " key={item.id}>
                  <li className="nav-item">
                    <a href={item.link} className="nav-link">
                      {item.key!== "contact" ? item.name: <button style={{fontWeight: 900, fontFamily:'"Paytone One", sans-serif !important' }} className="btn  btn-lg btn-primary">{item.name}</button>}
                      
                    </a>
                  </li>
                </ul>
              );
            })}
             
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
