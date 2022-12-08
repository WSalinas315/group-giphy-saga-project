const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM favorites`
  pool.query(queryText)
    .then((result) => res.send(result.rows))
    .catch((err) => {
      res.sendStatus(500);
      console.log('error getting favorites', err);
    });

});

// add a new favorite
router.post('/', (req, res) => {
  const newFavorite = req.body;
  const queryText = `INSERT INTO favorites ("url", "title")
                      VALUES ($1, $2);`
  const queryValues = [newFavorite.url, newFavorite.title];
  pool.query(queryText, queryValues)
    .then(()=> res.sendStatus(201))
    .catch(err => {
      res.sendStatus(500);
      console.log('error adding new favorite', err);
    });
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  const updatedFavorite = req.body;
  const queryText = `UPDATE favorites
                      SET "category_id" = $1
                      WHERE "id" = $2;`;
  const queryValues = [
    updatedFavorite.category_id,
    req.params.favId
  ];
  console.log(queryValues);
  pool.query(queryText, queryValues)
    .then(()=> res.sendStatus(200))
    .catch((err) => {
      console.log('error updating favorite category', err);
      res.sendStatus(500);
    });
  });

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
