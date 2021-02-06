const artistDataReducer = (state = { artist: {} }, action) => {
  switch (action.type) {
    case "GET_ARTIST_REQUEST":
      return { loading: true, ...state };
    case "GET_ARTIST_SUCCESS":
      return action.payload;
    case "GET_ARTIST_FAIL":
      return { error: action.payload };
    default:
      return state;
  }
};

export default artistDataReducer;
