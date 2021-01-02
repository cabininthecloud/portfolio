const express = require('express');
const cors = require('cors');
const Photo = require('../models/Photo');
const router = express.Router();

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const select = {
  id: 1,
  alt_description: 1,
  description: 1,
  'urls.raw': 1,
  'user.name': 1,
  'user.links.html': 1,
  width: 1,
  height: 1,
  blur_hash: 1,
};

router.get('/', cors(corsOptions), async (req, res) => {
  const photos = await Photo.find()
    .limit(parseInt(req.query.qty))
    .select(select);
  const total = await Photo.countDocuments({});
  res.send({
    total,
    photos,
  });
});

module.exports = router;
