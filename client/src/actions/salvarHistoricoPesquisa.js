import { SAVE_SEARCH_HISTORY } from "../constants/historicoPesquisaContansts";

const salvarHistoricoPesquisa = ({ artist, album }, userId) => async (
  dispatch,
  getState
) => {
  if (getState().historicoPesquisa.length >= 10) {
    getState().historicoPesquisa.shift();
  }

  // checar se histórico existe. se não existir, criar histórico
  localStorage.getItem(`historico${userId}`)
    ? (getState().historicoPesquisa = JSON.parse(
        localStorage.getItem(`historico${userId}`)
      ))
    : localStorage.setItem(
        `historico${userId}`,
        JSON.stringify(getState().historicoPesquisa)
      );

  dispatch({ type: SAVE_SEARCH_HISTORY, payload: { artist, album } });

  localStorage.setItem(
    `historico${userId}`,
    JSON.stringify(getState().historicoPesquisa)
  );
};

export default salvarHistoricoPesquisa;
