const express = require('express');
const router = express.Router();

// Sample route
router.get('/status', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString()
  });
});

module.exports = router; 