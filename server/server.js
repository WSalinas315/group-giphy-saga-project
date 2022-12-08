require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// App PORT set with production check
const PORT = process.env.PORT || 5000;

// Route includes
const favoriteRouter = require('./routes/favorite.router');
const categoryRouter = require('./routes/category.router');
const { default: axios } = require('axios');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('build'));

// Routes
app.use('/api/favorite', favoriteRouter);
app.use('/api/category', categoryRouter);

// GET gifs of a specified theme from Giphy API
app.use('/api/search/:query', (req, res) => {
  const querySubject = req.params.query;
  axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${querySubject}&limit=8`)
  .then((response) => {
    console.log('Success with Giphy API GET!');
    res.send(response.data);
  }).catch((error) =>{
    console.log('Error with Giphy API GET:', error);
    res.sendStatus(500);
  });
})

// Listen
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
