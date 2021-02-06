import uuid from "react-uuid";
const salvarHistoricoPesquisa = (state = { historicoPesquisa: {} }, action) => {
  switch (action.type) {
    case "SAVE_SEARCH_HISTORY":
      return {
        ...state,
        [`${uuid()}`]: action.payload,
      };
    default:
      return state;
  }
};
export default salvarHistoricoPesquisa;
