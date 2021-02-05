import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());
app.use(express.json());

app.listen(5000, console.log("Running on port 5000"));
