import axios from "axios";

export const getArtistData = () => async (dispatch, getState) => {
  try {
    dispatch({ type: "GET_ALBUM_REQUEST" });
    const { buscarPor } = getState();
    const { data } = await axios.post("http://localhost:5000", {
      params: {
        method: buscarPor,
        artist: "",
        album: "",
      },
    });
    dispatch({
      type: "GET_ALBUM_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GET_ALBUM_FAIL",
      payload: error.message,
    });
  }
};
