import axios from "axios";

export const getData = ({ artist, album }, buscarPor) => async (
  dispatch,
  getState
) => {
  if (album && buscarPor === "album") {
    try {
      dispatch({ type: "GET_ALBUM_REQUEST" });
      const { buscarPor } = getState();
      const { data } = await axios.post(
        `http://localhost:5000/album/${album}`,
        {
          params: {
            method: `${buscarPor}.getinfo`,
            artist: artist.toLowerCase(),
            album: album.toLowerCase(),
          },
        }
      );
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
  } else {
    try {
      dispatch({ type: "GET_ARTIST_REQUEST" });
      const { buscarPor } = getState();
      const { data } = await axios.post(
        `http://localhost:5000/artist/${artist}`,
        {
          params: {
            method: `${buscarPor}.getinfo`,
            artist: artist.toLowerCase(),
          },
        }
      );
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
  }
};
