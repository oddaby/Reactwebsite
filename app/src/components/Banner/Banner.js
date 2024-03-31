import React, { useEffect } from "react";
import "./Banner.css";
import bannerImage from "../../assets/images/banner-image.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200,
      once: true,
    });
  }, []);

  return (
    <div className="banner">
      <div className="banner-image">
        <img src={bannerImage} alt="Banner" className="img-fluid" />
      </div>
      <div
        className="banner-content"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1>Welcome to Kinet Tech</h1>
        <p>Unleashing the power of technology for a better tomorrow.</p>
        <button className="btn btn-primary">Learn More</button>
      </div>
    </div>
  );
};

export default Banner;
