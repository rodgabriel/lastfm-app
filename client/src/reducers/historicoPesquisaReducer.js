const historicoPesquisaReducer = (
  state = { historicoPesquisa: [] },
  action
) => {
  switch (action.type) {
    case "SAVE_SEARCH_HISTORY":
      return [...state, { [`${new Date().getTime()}`]: action.payload }];
    default:
      return state;
  }
};
export default historicoPesquisaReducer;
