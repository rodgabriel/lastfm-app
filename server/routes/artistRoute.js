import express from "express";
import { getArtistData } from "../controllers/artistController.js";

const router = express.Router();

router.route("/:artist").post(getArtistData);

export default router;
