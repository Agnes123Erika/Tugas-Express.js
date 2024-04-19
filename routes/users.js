const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');

router.get('/protected', authMiddleware, (req, res) => {
  res.send('Halaman Terlindungi');
});

module.exports = router;
