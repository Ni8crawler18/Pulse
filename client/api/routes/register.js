// routes/register.js
const express = require('express');
const router = express.Router();
const { anchorToTangle } = require('../tangle');

router.post('/', async (req, res) => {
  const { projectId, projectName, owner, location } = req.body;

  const payload = {
    type: 'registration',
    timestamp: new Date().toISOString(),
    data: { projectId, projectName, owner, location },
  };

  try {
    const result = await anchorToTangle(payload);
    res.json({ success: true, messageId: result });
  } catch (err) {
    res.status(500).json({ error: 'Failed to register project' });
  }
});

module.exports = router;