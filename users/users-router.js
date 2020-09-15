const express = require('express');

const Users = require('../auth/auth-model');

const router = express.Router();

router.get('/', (req, res) => {
    Users.getAll()
      .then((users) => {
        res.status(200).json(users);
      })
      .catch((error) => {
            res.status(404).json({ message: error.message });
        })
})

module.exports = router;