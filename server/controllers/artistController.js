import axios from "axios";
import asyncHandler from "express-async-handler";

const lastfmUrl = "http://ws.audioscrobbler.com/2.0/";

// GET ARTIST DATA
const getArtistData = asyncHandler(async (req, res) => {
  const { method, artist } = req.body.params;
  const { data } = await axios.get(`${lastfmUrl}`, {
    params: {
      method,
      artist,
      api_key: process.env.LASTFM_API_KEY,
      format: "json",
    },
  });
  res.json(data);
});
export { getArtistData };
