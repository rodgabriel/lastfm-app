import express from "express";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const router = express.Router();

router.route("/").post(
  asyncHandler(async (req, res) => {
    try {
      await User.deleteMany();
      console.log("Data destroyed!");
      res.json("Data destroyed");
    } catch (error) {
      console.error(error);
    }
  })
);

export default router;
