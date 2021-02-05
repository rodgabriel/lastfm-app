import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const baseUrl = "http://ws.audioscrobbler.com/2.0/";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/top", (req, res) => {
  const { method, country } = req.body.params;
  axios
    .get(`${baseUrl}`, {
      params: {
        method,
        country,
        limit: 10,
        api_key: process.env.LASTFM_API_KEY,
        format: "json",
      },
    })
    .then(({ data }) => {
      res.json(data);
    })
    .catch((error) => console.log(error));
});

app.listen(5000, console.log("Running on port 5000"));
