const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const routes = require('./src/routes');

dotenv.config();

const db = 'portfolio';
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.qalqt.mongodb.net/${db}?retryWrites=true&w=majority`;

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use('/', routes);

    const port = 5000;

    app.listen(port, () => {
      console.log(`Server has started on port ${port}`);
    });
  });
