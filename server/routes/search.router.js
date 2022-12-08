const express = require('express');
const { default: axios } = require('axios');
const router = express.Router();
require('dotenv').config();

// Route to GET gifs of a specified theme from Giphy API
app.use('/:query', (req, res) => {
  
  // extract search term from url
  const querySubject = req.params.query;

  // make axios get with giphy API
  axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${querySubject}&limit=8`)
  .then((response) => {
    console.log('Success with Giphy API GET!');
    res.send(response.data);
  })
  .catch((error) =>{
    console.log('Error with Giphy API GET:', error);
    res.sendStatus(500);
  });
})

module.exports = router;