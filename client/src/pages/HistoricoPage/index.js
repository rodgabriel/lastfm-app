import { useSelector } from "react-redux";
// styles
import {
  container,
  pesquisasContent,
  pesquisaCard,
  pesquisaArtist,
  pesquisaAlbum,
  pesquisaDate,
} from "./styles.module.scss";

const Index = () => {
  const historicoPesquisa = useSelector((state) => state.historicoPesquisa);

  const { userData } = useSelector((state) => state.userLogin);
  const userId = userData ? userData._id : "000";

  return (
    <div className={container}>
      <h1>Histórico de pesquisas</h1>
      {userData && (
        <div className={pesquisasContent}>
          {historicoPesquisa
            .reverse()
            .map((pesquisaObj) => Object.entries(pesquisaObj))
            .filter((pesquisa) => {
              return pesquisa[0][1].userId === userId && pesquisa;
            })
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
