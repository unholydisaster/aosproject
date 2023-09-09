import React, { useState, useEffect } from "react";
import "../styles.css";
import { animations } from "../utils/animations";


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
