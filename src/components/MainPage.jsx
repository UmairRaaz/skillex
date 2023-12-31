"use client";
import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import About from "./About";
import WhatAreWe from "./WhatAreWe";
import Reviews from "./Reviews";
import Footer from "./Footer";
import NavBar from "./Navbar";
import LoadingScroller from "./LoadingScroller";

const MainPage = () => {
  const [loaded, setloaded] = useState(true);
  useEffect(() => {
    setloaded(false);
  }, []);
  return (
    <div>
      {loaded ? (
        <LoadingScroller />
      ) : (
        <>
          <NavBar />
          <Hero />
          <About />
          <WhatAreWe />
          <Reviews />
          <Footer />
        </>
      )}
    </div>
  );
};

export default MainPage;
