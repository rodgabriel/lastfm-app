import axios from "axios";

import {
  GET_ALBUM_REQUEST,
  GET_ALBUM_SUCCESS,
  GET_ALBUM_FAIL,
} from "../constants/buscasContants";

const buscarAlbumData = (artist, album) => async (dispatch) => {
  try {
    dispatch({ type: GET_ALBUM_REQUEST });
    const { data } = await axios.post(`http://localhost:5000/album/${album}`, {
      params: {
        method: `album.getinfo`,
        artist: artist.toLowerCase(),
        album: album.toLowerCase(),
      },
    });
    dispatch({
      type: GET_ALBUM_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALBUM_FAIL,
      payload: error.message,
    });
  }
};

export default buscarAlbumData;
