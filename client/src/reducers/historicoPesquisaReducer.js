import {
  LOAD_SEARCH_HISTORY,
  SAVE_SEARCH_HISTORY,
} from "../constants/historicoPesquisaContansts";

const historicoPesquisaReducer = (
  state = { historicoPesquisa: [] },
  action
) => {
  switch (action.type) {
    case LOAD_SEARCH_HISTORY:
      return action.payload;
    case SAVE_SEARCH_HISTORY:
      return [...state, { [`${new Date().getTime()}`]: action.payload }];
    default:
      return state;
  }
};

export default historicoPesquisaReducer;
