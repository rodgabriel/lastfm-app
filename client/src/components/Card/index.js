import React from "react";
// css classes
import {
  card,
  cardHeader,
  cardContent,
  cardAvatar,
} from "./styles.module.scss";

const index = ({ artist, position }) => {
  return (
    <div className={card}>
      <div className={cardHeader}>
        <div className={cardAvatar}>
          <p>{position + 1}</p>
        </div>
      </div>
      <div className={cardContent}>
        <h2>{artist.name}</h2>
        <p>
          {Number(artist.listeners).toLocaleString("pt-BR")} ouvintes mensais
        </p>
        <p>Saiba mais!</p>
      </div>
    </div>
  );
};

export default React.memo(index);
