const salvarHistoricoPesquisa = ({ artist, album }) => async (
  dispatch,
  getState
) => {
  dispatch({ type: "SAVE_SEARCH_HISTORY", payload: { artist, album } });
  localStorage.setItem(
    "historicoPesquisa",
    JSON.stringify(getState().historicoPesquisa)
  );
};

export default salvarHistoricoPesquisa;
