const router = require('express').Router();
const photos = require('./photos');

router.use('/photos', photos);

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

module.exports = router;
