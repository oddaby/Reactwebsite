// App.js
import React from "react";
//import { themes } from "./constants/theme";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Services from "./components/Services/ServicesSection ";
import Footer from "./components/Footer/Footer";
import Comment from "./components/Comment/Comment";

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Services />
      <Comment/>
      <Footer/>
    </div>
  );
};

export default App;
