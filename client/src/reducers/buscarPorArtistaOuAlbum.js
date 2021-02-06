const buscarPorArtistaOuAlbum = (state = { buscarPor: "artist" }, action) => {
  switch (action.type) {
    case "BUSCAR_POR_ARTIST":
      return action.payload;
    case "BUSCAR_POR_ALBUM":
      return action.payload;
    default:
      return state;
  }
};
export default buscarPorArtistaOuAlbum;
