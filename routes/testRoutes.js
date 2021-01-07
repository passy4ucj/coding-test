import https from "https"
import express from 'express'
const router = express.Router()
import { protect } from '../middleware/authMiddleware.js'




router.route('/card').get(protect, (req, res) => {
    https
  .get("https://lookup.binlist.net/45717360", res => {
    let data = "";

    // A chunk of data has been recieved.
    res.on("data", chunk => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    res.on("end", () => {
      let url = JSON.parse(data);
      console.log(url)
     // return url
    });
    //res.json(url)
    
  })
  .on("error", err => {
    console.log("Error: " + err.message);
  })
  .end();
})


export default router