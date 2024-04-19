import React from "react";
import navLinks from "./navLinks";
import { colors } from "./colors";
import { Link } from "react-scroll"; // Import the Link component from react-scroll

const NavbarLinks = () => {
  return (
    <div>
      <ul className="navbar-nav text-bold">
        {navLinks.map((link, index) => (
          <li key={index} className="nav-item">
            <Link
              className="nav-link"
              to={link.path} // Use the Link component with the "to" prop set to the path
              smooth={true} // Enable smooth scrolling
              duration={1000} // Set the duration of the scroll animation
              style={{ color: colors.darkGreen }}
            >
              <i className={`fas fa-${link.icon}`}></i> {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavbarLinks;
