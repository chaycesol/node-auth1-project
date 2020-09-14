const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const KnexSessionStore = require('connect-session-knex'); // come back and put in (session) towards the end
const server = express();

//Routers
const usersRouter = require('../users/users-router');
const authRouter = require('../auth/auth-router');


//Middleware
server.use(helmet());
server.use(express.json());
server.use(logger());

server.use('/api/users', usersRouter); 
// server.use("/api/users", protected, usersRouter); //uncomment this one out when you're ready for protected roots
server.use('/api/auth', authRouter);

// Base endpoint
server.get('/', (req, res) => {
    res.status(200).json({ message: 'up and running' })
});


function logger(req, res, next) {
    return function (req, res, next) {
      console.log(`a ${req.method} request was made to ${req.url} at ${new Date()}`);
      next();
    }
  }

module.exports = server;