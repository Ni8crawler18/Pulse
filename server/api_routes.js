// server.js
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/api/register', require('./routes/register'));
app.use('/api/log-activity', require('./routes/log-activity'));
app.use('/api/mint-credit', require('./routes/mint-credit'));
app.use('/api/get-logs', require('./routes/get-logs'));

app.listen(PORT, () => {
  console.log(`Pulse API running at http://localhost:${PORT}`);
});