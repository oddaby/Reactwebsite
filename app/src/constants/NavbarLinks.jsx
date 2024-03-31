import React from "react";
import navLinks from "./navLinks";
import { colors } from "./colors"; // Import the colors object

const NavbarLinks = () => {
  return (
    <div>
      <ul className="navbar-nav text-bold">
        {navLinks.map((link, index) => (
          <li key={index} className="nav-item">
            <a
              className="nav-link"
              href={link.path}
              style={{ color: colors.darkGreen }}
            >
              <i className={`fas fa-${link.icon}`}></i> {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavbarLinks;
