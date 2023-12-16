import React from "react";
import Hero from "./Hero";
import About from "./About";
import WhatAreWe from "./WhatAreWe";
import Reviews from "./Reviews";
import Footer from "./Footer";
import NavBar from "./Navbar";

const MainPage = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <WhatAreWe />
      <Reviews />
      <Footer />
    </div>
  );
};

export default MainPage;
