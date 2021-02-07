import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// reducers
import buscarPorArtistaOuAlbum from "./reducers/buscarPorArtistaOuAlbum";
import historicoPesquisaReducer from "./reducers/historicoPesquisaReducer";
import artistDataReducer from "./reducers/artistDataReducer";
import albumDataReducer from "./reducers/albumDataReducer";
import topArtistsReducer from "./reducers/topArtistsReducer";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducers";

const rootReducer = combineReducers({
  buscarPor: buscarPorArtistaOuAlbum,
  historicoPesquisa: historicoPesquisaReducer,
  artistData: artistDataReducer,
  albumData: albumDataReducer,
  topArtists: topArtistsReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
});

const userDataLocalStorage = localStorage.getItem("userData")
  ? JSON.parse(localStorage.getItem("userData"))
  : null;

const historicoPesquisaLocalStorage = localStorage.getItem("historicoPesquisa")
  ? JSON.parse(localStorage.getItem("historicoPesquisa"))
  : [];

const initialState = {
  buscarPor: "artist",
  historicoPesquisa: historicoPesquisaLocalStorage,
  artistData: {},
  albumData: {},
  topArtists: [],
  userLogin: {
    userData: userDataLocalStorage,
  },
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
