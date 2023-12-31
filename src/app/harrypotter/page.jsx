"use client"
import "../../app/styles.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HarryCharacters from "../components/harryCharacters";
import Hero from "../components/hero";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="App">
      <Hero/>
      <HarryCharacters />
    </div>
  );
};
export default Home;
