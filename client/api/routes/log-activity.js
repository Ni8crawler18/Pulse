// routes/log-activity.js
const express = require('express');
const router = express.Router();
const { anchorToTangle } = require('../tangle');

router.post('/', async (req, res) => {
  const { projectId, activityType, amount, units, description } = req.body;

  const payload = {
    type: 'activity-log',
    timestamp: new Date().toISOString(),
    data: { projectId, activityType, amount, units, description },
  };

  try {
    const result = await anchorToTangle(payload);
    res.json({ success: true, messageId: result });
  } catch (err) {
    res.status(500).json({ error: 'Failed to log activity' });
  }
});

module.exports = router;
