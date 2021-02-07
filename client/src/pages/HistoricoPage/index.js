import { useSelector } from "react-redux";
// styles
import {
  container,
  pesquisasContent,
  pesquisaCard,
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
                  <h3>
                    <strong>Artista: </strong>
                    {pesquisa.artist}
                  </h3>
                  {pesquisa.album && (
                    <h3>
                      <strong>Álbum: </strong>
                      {pesquisa.album}
                    </h3>
                  )}
                  <p>{String(date)}</p>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Index;
