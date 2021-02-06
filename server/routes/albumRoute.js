import express from "express";
import { getAlbumData } from "../controllers/albumController.js";

const router = express.Router();

router.route("/:album").post(getAlbumData);

export default router;
