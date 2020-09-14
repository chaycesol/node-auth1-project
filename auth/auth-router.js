const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
   
   res.status(200).json({ message: 'auth endpoint working' })
    // Users.find()
    //     .then(users => {
    //         res.status(200).json(users);
    //     })
    //     .catch(err => {
    //         res.send(err);
    //     })
})

module.exports = router;