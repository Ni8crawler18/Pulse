// tangle.js
const { SingleNodeClient, send } = require('@iota/sdk');
require('dotenv').config();

const client = new SingleNodeClient(process.env.NODE_URL);

async function anchorToTangle(payload) {
  const message = {
    type: 2,
    payload: {
      type: 0,
      index: 'pulse-carbon-credit',
      data: Buffer.from(JSON.stringify(payload)).toString('hex'),
    },
  };

  try {
    const response = await send(client, message);
    return response;
  } catch (err) {
    console.error("Tangle anchoring failed:", err);
    throw err;
  }
}

module.exports = { anchorToTangle };
