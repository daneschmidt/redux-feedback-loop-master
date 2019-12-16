const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
  let queryText = 'SELECT * FROM "feedback" ORDER BY "id" ASC;';
  pool.query(queryText).then(result => {
    res.send(result.rows);
  })
    .catch(error => {
      res.sendStatus(500);
    });
});

///POST SETUP

router.post('/', (req, res) => {
  let newFeedback = req.body;


  let queryString = `INSERT INTO "feedback" (feeling, understanding, support, comments) VALUES
  ('${newFeedback.feeling}', '${newFeedback.understanding}', '${newFeedback.support}', '${newFeedback.comments}');`;



  pool.query(queryString)
    .then((response) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

/// END POST SETUP

module.exports = router;