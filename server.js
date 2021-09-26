const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const config = require('./config/db');

// Use Node's default promise instead of Mongoose's promise library
mongoose.Promise = global.Promise;

// Connect to the database
mongoose.connect(config.db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
});

let db = mongoose.connection;

db.on('open', () => {
      console.log('Connected to the database.');
});

db.on('error', (err) => {
      console.log(`Database error: ${err}`);
});

// Instantiate express
const app = express();

app.enable('trust proxy');

// Set body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Initialize routes middleware
app.use('/users', require('./routes/user'));

// Use express's default error handling middleware
app.use((err, req, res, next) => {
      if (res.headersSent) return next(err);
      res.status(400).json({ err: err });
});

// Start the server
const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
      console.log(`Listening on port ${port}`);
});