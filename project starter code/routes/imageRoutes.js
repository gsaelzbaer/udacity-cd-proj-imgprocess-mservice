import express from "express";
import validUrl from "valid-url";
import { filterImageFromURL, deleteLocalFiles } from "../util/util.js";
export const router = express.Router();

// Get tweet by id
router.get("/filteredimage", async (req, res) => {
  let imageUrl = req.query.image_url;

  try {
    let verifiedUrl = new URL(imageUrl)
    filterImageFromURL(verifiedUrl)
      .then((success) => { res.status(200).send(success); return success })
      .catch((error) => { res.status(500).send(error.message) })
      .then((file) => { if (file) 
        { 
         // deleteLocalFiles(new Array(file)) 
        } });
  } catch (error) {
    return res.status(400).send(error.message);
  }
});