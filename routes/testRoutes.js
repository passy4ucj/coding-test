import https from "https"
import express from 'express'
const router = express.Router()
import { protect } from '../middleware/authMiddleware.js'




router.route('/card').post(protect, (req, response) => {
    https
  .get(`https://lookup.binlist.net/${req.body.bin}`, res => {
    let data = "";

    // A chunk of data has been recieved.
    res.on("data", chunk => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    res.on("end", (res) => {
      let url = JSON.parse(data);
      console.log(url)
     // return url
     response.json(url)
    });
    
    
  })
  .on("error", err => {
    console.log("Error: " + err.message);
  })
  .end();
})


export default router