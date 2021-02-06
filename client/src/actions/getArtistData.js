import axios from "axios";

export const getArtistData = (termo) => async (dispatch, getState) => {
  try {
    dispatch({ type: "GET_ARTIST_REQUEST" });
    const { buscarPor } = getState();
    const { data } = await axios.post(`http://localhost:5000/artist/${termo}`, {
      params: {
        method: `${buscarPor}.getinfo`,
        artist: termo,
      },
    });
    dispatch({
      type: "GET_ARTIST_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GET_ARTIST_FAIL",
      payload: error.message,
    });
  }
};
