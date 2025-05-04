// routes/mint-credit.js
const express = require('express');
const router = express.Router();
const { anchorToTangle } = require('../tangle');

router.post('/', async (req, res) => {
  const { projectId, creditsIssued, reason } = req.body;

  const payload = {
    type: 'mint',
    timestamp: new Date().toISOString(),
    data: { projectId, creditsIssued, reason },
  };

  try {
    const result = await anchorToTangle(payload);
    res.json({ success: true, messageId: result });
  } catch (err) {
    res.status(500).json({ error: 'Minting failed' });
  }
});

module.exports = router;