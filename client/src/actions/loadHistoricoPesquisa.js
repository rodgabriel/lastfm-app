const loadHistoricoPesquisa = (userId) => async (dispatch, getState) => {
  // checar se histórico existe. se não existir, criar histórico
  localStorage.getItem(`historico${userId}`)
    ? (getState().historicoPesquisa = JSON.parse(
        localStorage.getItem(`historico${userId}`)
      ))
    : localStorage.setItem(
        `historico${userId}`,
        JSON.stringify(getState().historicoPesquisa)
      );

  dispatch({
    type: "LOAD_SEARCH_HISTORY",
    payload: getState().historicoPesquisa,
  });
};

export default loadHistoricoPesquisa;
