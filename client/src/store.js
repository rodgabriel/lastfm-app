import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// reducers
import buscarPorArtistaOuAlbum from "./reducers/buscarPorArtistaOuAlbum";

const rootReducer = combineReducers({
  buscarPor: buscarPorArtistaOuAlbum,
});

const initialState = {
  buscarPor: "artist",
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
