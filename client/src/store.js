import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// reducers
import buscarPorArtistaOuAlbum from "./reducers/buscarPorArtistaOuAlbum";
import historicoPesquisaReducer from "./reducers/historicoPesquisaReducer";
import artistDataReducer from "./reducers/artistDataReducer";
import albumDataReducer from "./reducers/albumDataReducer";

const rootReducer = combineReducers({
  buscarPor: buscarPorArtistaOuAlbum,
  historicoPesquisa: historicoPesquisaReducer,
  artistData: artistDataReducer,
  albumData: albumDataReducer,
});

const historicoPesquisaLocalStorage = localStorage.getItem("historicoPesquisa")
  ? JSON.parse(localStorage.getItem("historicoPesquisa"))
  : {};

const initialState = {
  buscarPor: "artist",
  historicoPesquisa: historicoPesquisaLocalStorage,
  artistData: {},
  albumData: {},
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
