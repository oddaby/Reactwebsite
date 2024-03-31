// App.js
import React from "react";
//import { themes } from "./constants/theme";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Services from "./components/Services/ServicesSection ";

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Services/>
    </div>
  );
};

export default App;
