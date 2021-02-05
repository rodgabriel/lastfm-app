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

app.listen(5000, console.log("Running on port 5000"));
