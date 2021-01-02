const mongoose = require('mongoose');

const schema = mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  alt_description: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  urls: {
    raw: {
      type: String,
      required: true,
    },
  },
  user: {
    name: {
      type: String,
      required: true,
    },
    links: {
      html: {
        type: String,
        required: true,
      },
    },
  },
  width: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Photo', schema);
