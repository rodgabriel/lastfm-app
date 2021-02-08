import {
  BUSCAR_POR_ARTIST,
  BUSCAR_POR_ALBUM,
} from "../constants/userConstants";

export const selecionarBuscaPorArtist = {
  type: BUSCAR_POR_ARTIST,
  payload: "artist",
};

export const selecionarBuscaPorAlbum = {
  type: BUSCAR_POR_ALBUM,
  payload: "album",
};
