import React, { useState } from "react";
import "./styles.css";

const musicDB = {
  Hiphop: [
    { name: "Chal Bomabay ", rating: "5/5" },
    { name: "Machayenge", rating: "4/5" },
    { name: "Apna TIme Aayega", rating: "4.5/5" }
  ],

  Jazz: [
    { name: "All Blues", rating: "5/5" },
    {
      name: "Take Five",
      rating: "4.5/5"
    },
    {
      name: "So What",
      rating: "4/5"
    }
  ],
  Soothing: [
    {
      name: "Jaan Nisar ",
      rating: "5/5"
    },
    {
      name: "Tum se hi",
      rating: "5/5"
    },
    {
      name: "Pehli Dafa ",
      rating: "4.5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Hiphop");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>My music Recommendations 🎵 </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favourite list of recommended musics. Select a type to get
        started.{" "}
      </p>

      <div>
        {Object.keys(musicDB).map((genre) => (
          <button className="Btn" onClick={() => genreClickHandler(genre)}>
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {musicDB[selectedGenre].map((music) => (
            <li className="music" key={music.name}>
              {" "}
              <div style={{ fontSize: "larger" }}> {music.name} </div>
              <div style={{ fontSize: "smaller" }}> {music.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
