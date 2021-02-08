import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import loadHistoricoPesquisa from "../../actions/loadHistoricoPesquisa";

// styles
import {
  mainContainer,
  pesquisasContent,
  pesquisaCard,
  pesquisaArtist,
  pesquisaAlbum,
  pesquisaDate,
} from "./styles.module.scss";

const Index = () => {
  const dispatch = useDispatch();
  const historicoPesquisa = useSelector((state) => state.historicoPesquisa);

  const { userData } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (userData) {
      const userId = userData._id;
      dispatch(loadHistoricoPesquisa(userId));
    }
  }, [userData, dispatch]);

  return (
    <div className={mainContainer}>
      <h1>Histórico de pesquisas</h1>
      {userData && (
        <div className={pesquisasContent}>
          {historicoPesquisa
            // orderna as pesquisas da mais recente à mais antiga
            .sort((a, b) => (Object.keys(a)[0] > Object.keys(b)[0] ? -1 : 1))
            // pesquisa é um objeto {timestamp: {termos de busca}}
            // Object.entries aqui retorna um array [timestamp, {termos de busca}]
            .map((pesquisaObj) => Object.entries(pesquisaObj))
            .map(([[timestamp, pesquisa]], index) => {
              const date = new Date(Number(timestamp)).toLocaleDateString(
                "pt-BR",
                {
                  hour: "numeric",
                  minute: "numeric",
                }
              );
              return (
                <div key={index} className={pesquisaCard}>
                  <div className={pesquisaArtist}>
                    <p>Artista: </p>
                    <strong>{pesquisa.artist}</strong>
                  </div>
                  {pesquisa.album && (
                    <div className={pesquisaAlbum}>
                      <p>Álbum: </p>
                      <strong>{pesquisa.album}</strong>
                    </div>
                  )}
                  <div className={pesquisaDate}>
                    <p>{String(date)}</p>
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Index;
