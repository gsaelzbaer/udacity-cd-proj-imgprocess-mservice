import express from "express";
import validUrl from "valid-url";
import { filterImageFromURL } from "../util/util.js";
export const router = express.Router();

// Get tweet by id
router.get("/filteredimage", async (req, res) => {
  let url = req.query.image_url;

  let validLink = validUrl.isUri(url);

  if (!validLink) {
    return res.status(400).send(`Not a valid link format.`);
  }

  try {

    let path = await filterImageFromURL(url);

    return res.status(200).send(path);
  } catch (error) {

    return res.status(500).send(error);
  }
});