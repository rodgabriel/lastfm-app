import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// reducers
import buscarPorArtistaOuAlbum from "./reducers/buscarPorArtistaOuAlbum";
import salvarHistoricoPesquisa from "./reducers/salvarHistoricoPesquisa";

const rootReducer = combineReducers({
  buscarPor: buscarPorArtistaOuAlbum,
  historicoPesquisa: salvarHistoricoPesquisa,
});

const historicoPesquisaLocalStorage = localStorage.getItem("historicoPesquisa")
  ? JSON.parse(localStorage.getItem("historicoPesquisa"))
  : {};

const initialState = {
  buscarPor: "artist",
  historicoPesquisa: historicoPesquisaLocalStorage,
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
