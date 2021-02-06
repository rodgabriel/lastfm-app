const salvarHistoricoPesquisa = ({ artist, album }, userId) => async (
  dispatch,
  getState
) => {
  dispatch({ type: "SAVE_SEARCH_HISTORY", payload: { artist, album, userId } });
  localStorage.setItem(
    "historicoPesquisa",
    JSON.stringify(getState().historicoPesquisa)
  );
};

export default salvarHistoricoPesquisa;
