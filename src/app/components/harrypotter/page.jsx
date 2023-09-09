"use client"
import "../../app/styles.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HarryCharacters from "../components/HarryCharacters";
import Hero from "../components/Hero";

const HarryCharactersList = () => {
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
export default HarryCharactersList;
