const express = require('express');

const router = express.Router();

const usersControllers = require('../controllers/users');

router.post('/registerusers', (req, res, next) => {
  usersControllers.registerUsers(req.body)
  .then((data) => {
    res.json(data)
  })
  .catch((err) => {
    next(err)
  })
});

router.post('/loginusers', (req, res, next) => {
  usersControllers.loginUsers(req.body)
  .then((data) => {
    res.json(data)
  })
  .catch((err) => {
    next(err)
  })
});

module.exports = router;  