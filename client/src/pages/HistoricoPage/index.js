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

  console.log(Object.entries(historicoPesquisa).map((t) => t));
  return (
    <div className={container}>
      <h1>Histórico de pesquisas</h1>
      {userData && (
        <div className={pesquisasContent}>
          {Object.entries(historicoPesquisa)
            .filter((pesquisa) => pesquisa[1].userId === userData._id)
            .map(([timestamp, pesquisa]) => {
              const date = new Date(Number(timestamp)).toLocaleDateString(
                "pt-BR",
                {
                  hour: "numeric",
                  minute: "numeric",
                }
              );
              return (
                <div className={pesquisaCard}>
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
