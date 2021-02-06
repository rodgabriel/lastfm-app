import axios from "axios";
import asyncHandler from "express-async-handler";

const lastfmUrl = "http://ws.audioscrobbler.com/2.0/";

// GET ALBUM DATA
const getAlbumData = asyncHandler(async (req, res) => {
  const { method, artist, album } = req.body.params;
  console.log(method);
  const { data } = await axios.get(`${lastfmUrl}`, {
    params: {
      method,
      album,
      api_key: process.env.LASTFM_API_KEY,
      artist,
      format: "json",
    },
  });
  res.json(data);
});
export { getAlbumData };
