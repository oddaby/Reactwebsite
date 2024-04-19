import React, { useEffect } from "react";
import "animate.css";

const Footer = () => {
  const year = new Date().getFullYear();

  useEffect(() => {
    const elements = document.querySelectorAll(".slide-in");
    const options = {
      threshold: 0.5,
      rootMargin: "0px 0px -100px 0px",
    };

    const slideInObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate__slideInLeft");
        }
      });
    }, options);

    elements.forEach((element) => {
      slideInObserver.observe(element);
    });

    return () => {
      slideInObserver.disconnect();
    };
  }, []);

  return (
    <footer className="bg-dark text-light">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 slide-in">
            <h5>About Us</h5>
            <p>
              We are a leading software development company dedicated to
              delivering high-quality solutions.
            </p>
            <p>Address: 123 Main St, City, Country</p>
          </div>
          <div className="col-md-6 slide-in">
            <h5>Contact Us</h5>
            <p>Phone: +1 123-456-7890</p>
            <p>Email: info@example.com</p>
          </div>
        </div>
      </div>
      <div className="bg-secondary text-center py-3">
        <p className="mb-0">&copy; Upbeat Code {year}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
