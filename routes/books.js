const express = require('express');

const router = express.Router();

const booksControllers = require('../controllers/books');

router.post('/registerBooks', (req, res, next) => {
  booksControllers.RegisterBooks(req.body)
  .then((data) => {
    res.json(data)
  })
  .catch((err) => {
    next(err)
  })
});

router.get('/getbooks', (req, res, next) => {
  booksControllers.getBooks()
  .then((data) => {
    res.json(data)
  })
  .catch((err) => {
    next(err)
  })
});

router.put('/updatebooks/:id', (req, res, next) => {
  booksControllers.updateBooks(req.body, req.params.id)
  .then((data) => {
    res.json(data)
  })
  .catch((err) => {
    next(err)
  })
});

router.delete('/deletebooks/:id', (req, res, next) => {
  booksControllers.deleteBooks(req.params.id)
  .then((data) => {
    res.json(data)
  })
  .catch((err) => {
    next (err)
  })
});

module.exports = router;