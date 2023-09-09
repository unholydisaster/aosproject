import React, { useState, useEffect } from "react";
import "../styles.css";

const animations = [
    "fade-left",
    "fade-right",
    "fade-up",
    "fade-down",
    "fade-up-right",
    "fade-up-left",
    "fade-down-right",
    "fade-down-left",
    "flip-left",
    "flip-right",
    "flip-up",
    "flip-down",
    "zoom-in",
    "zoom-in-up",
    "zoom-in-down",
    "zoom-in-left",
    "zoom-in-right",
    "zoom-out",
    "zoom-out-up",
    "zoom-out-down",
    "zoom-out-right",
    "zoom-out-left",
  ];

function HarryCharacters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((response) => response.json())
      .then((data) => setCharacters(data))
      .catch((error) => console.log("Error fetching data:", error));
  }, []);

  const assignAnimation=()=>{
    var animationName;
    for(const character of characters){
            // Get the random index of the animation
    const randomIndex = Math.floor(Math.random() * animations.length);
    animationName = animations[randomIndex];

    }
    return animationName
  }

  return (
    <div className="body">
      <h1 className="header">Harry Potter Characters</h1>
      <div className="characters-container">
        {characters.map((character) => (
          <div
            data-aos={assignAnimation()}
            className="single-character"
            key={character.name}
          >
            <h2>{character.name}</h2>
            <img src={character.image} alt="character" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HarryCharacters;
