const salvarHistoricoPesquisa = ({ artist, album }, userId) => async (
  dispatch,
  getState
) => {
  // verifica se o máximo de pesquisas salvas por usuário já foi atingido
  // se verdadeiro, exclui a pesquisa mais antiga do usuário antes de salvar a nova
  const historicoLengthPerUser = getState().historicoPesquisa.filter(
    (p) => Object.values(p)[0].userId === userId
  ).length;
  if (historicoLengthPerUser >= 5) {
    getState().historicoPesquisa.shift();
  }

  dispatch({ type: "SAVE_SEARCH_HISTORY", payload: { artist, album, userId } });

  localStorage.setItem(
    "historicoPesquisa",
    JSON.stringify(getState().historicoPesquisa)
  );
};

export default salvarHistoricoPesquisa;
