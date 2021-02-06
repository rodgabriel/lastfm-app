const albumDataReducer = (state = { album: {} }, action) => {
  switch (action.type) {
    case "GET_ALBUM_REQUEST":
      return { loading: true, ...state };
    case "GET_ALBUM_SUCCESS":
      return action.payload;
    case "GET_ALBUM_FAIL":
      return { error: action.payload };
    default:
      return state;
  }
};

export default albumDataReducer;
