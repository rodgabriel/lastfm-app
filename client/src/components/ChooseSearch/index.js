import { useState } from "react";

// styles
import {
  inputContainer,
  inputCheck,
  inputLabel,
  active,
} from "./styles.module.scss";

const Index = () => {
  const [selected, setSelected] = useState("Artista");

  return (
    <div className={inputContainer}>
      <>
        <label
          className={`${inputLabel} ${selected === "Artista" ? active : ""}`}
          for="Artista"
        >
          <p>Artista</p>
          <i className="fas fa-microphone-alt"></i>
        </label>
        <input
          className={inputCheck}
          id="Artista"
          type="radio"
          name="Artista"
          checked={selected === "Artista" ? true : false}
          onClick={(e) => setSelected(e.target.name)}
        ></input>
      </>
      <>
        <label
          className={`${inputLabel} ${selected === "Album" ? active : ""}`}
          for="Album"
        >
          <p>Álbum</p>
          <i className="fas fa-compact-disc"></i>
        </label>
        <input
          className={inputCheck}
          id="Album"
          type="radio"
          name="Album"
          checked={selected === "Album" ? true : false}
          onClick={(e) => setSelected(e.target.name)}
        ></input>
      </>
    </div>
  );
};

export default Index;
