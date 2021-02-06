import express from "express";
import asyncHandler from "express-async-handler";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const lastfmUrl = "http://ws.audioscrobbler.com/2.0/";
const musicBrainzUrl = "https://musicbrainz.org/ws/2/";

const app = express();
app.use(cors());
app.use(express.json());

app.post(
  "/top",
  asyncHandler(async (req, res) => {
    const { method, country } = req.body.params;
    const { data } = await axios.get(`${lastfmUrl}`, {
      params: {
        method,
        country,
        limit: 10,
        api_key: process.env.LASTFM_API_KEY,
        format: "json",
      },
    });

    res.json(data.topartists["artist"]);
  })
);

// GET ARTIST DATA
app.post(
  "/artist/:name",
  asyncHandler(async (req, res) => {
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
  })
);

// GET ALBUM DATA
app.post(
  "/album/:name",
  asyncHandler(async (req, res) => {
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
    console.log(data);
    res.json(data);
  })
);

app.listen(5000, console.log("Running on port 5000"));
