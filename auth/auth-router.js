const express = require('express');

const Users = require('../users/users-model');

const router = express.Router();

router.post('/register', (req, res) => {
   const userInfo = req.body;

   const validationResult = validateUser(userInfo);

   if(validationResult.success) {
        Users.add(userInfo).then(inserted => {
            res.status(201).json({data: inserted});
        });
   } else {
       res.status(400).json({ 
           message: 'Invalid information, please verify and try again' 
        });
   }
});

module.exports = router;