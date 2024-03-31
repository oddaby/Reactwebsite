import React from "react";
import NavbarLinks from "../../constants/NavbarLinks";
import { colors } from "../../constants/colors"; // Import the colors object
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-transparent bg-transparent"
      style={{ backgroundColor: colors.white }}
    >
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img
            src="logo.png"
            alt="Logo"
            className="img-fluid me-2"
            style={{ maxWidth: "50px" }}
          />
          <strong style={{ color: colors.darkGreen }}>Kinet Tech</strong>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="ms-auto">
            <NavbarLinks />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
