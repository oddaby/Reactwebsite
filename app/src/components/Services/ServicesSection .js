import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ServicesSection .css";

const servicesData = [
  {
    title: "Software Installation",
    description: "We provide professional software installation services.",
    icon: "fas fa-laptop",
  },
  {
    title: "Web Development",
    description: "We offer custom web development solutions for your business.",
    icon: "fas fa-code",
  },
  {
    title: "WiFi Installation",
    description:
      "Get reliable WiFi installation services for your home or office.",
    icon: "fas fa-wifi",
  },
  {
    title: "Graphic Design",
    description: "Our graphic design services will bring your ideas to life.",
    icon: "fas fa-palette",
  },
  {
    title: "Data Recovery",
    description: "We specialize in data recovery for lost or corrupted files.",
    icon: "fas fa-database",
  },
  {
    title: "IT Consultancy",
    description: "Get expert advice and guidance for your IT projects.",
    icon: "fas fa-chalkboard-teacher",
  },
];

const ServiceCard = ({ title, description, icon }) => (
  <div
    className="col-md-4 mb-4"
    data-aos="fade-up"
    data-aos-delay="200"
    data-aos-duration="1000"
  >
    <div className="card h-100 service-card">
      <div className="card-body">
        <div className="icon-container">
          <i className={`${icon} card-icon`}></i>
        </div>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  </div>
);

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div id="services-section" className="container my-5">
      <h2 className="text-center mb-4">Our Services</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
