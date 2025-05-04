# Pulse: Transparent Carbon Credit Issuance Using IOTA

**Pulse** is a decentralized platform that allows organizations and individuals to transparently register carbon-saving projects, log their environmental activities (like tree planting or solar installation), and simulate carbon credit issuance. Each action is cryptographically anchored on the **IOTA Tangle** (Testnet), ensuring data integrity, transparency, and tamper-resistance.

> Live Demo: [pulse-iota-lime.vercel.app](https://pulse-iota-lime.vercel.app)  

> Explorer: View activity logs on [iotascan.com/testnet](https://iotascan.com/testnet)

## Features

- 🌱 **Register Projects** — e.g., afforestation, clean energy installations  
- 📝 **Log Carbon Activities** — e.g., planting trees, reducing emissions  
- 🌐 **Anchor to IOTA Tangle** — immutable, decentralized logging on the IOTA Testnet  
- 🎟️ **Simulate Carbon Credit Issuance** — mimic real-world credit generation  
- 🧾 **Verifiable Logs** — All activities are traceable and viewable via message IDs

## How IOTA is Used

Pulse integrates with the **IOTA Rebased Testnet** using the `@iota/sdk` library. All key activities—like project registration, carbon activity logging, and simulated credit minting—are written as messages to the **IOTA Tangle**.

Each message contains:
- Project ID
- Description of activity
- Timestamp
- Optional simulated credit amount

  These messages can be verified on [iotascan.com/testnet](https://iotascan.com/testnet).

## Tech Stack

- **Frontend**: Next.js 13 (App Router), Tailwind CSS, ShadCN UI  
- **Blockchain**: IOTA SDK (`@iota/sdk`) on IOTA Testnet  
- **Wallet**: Nightly Wallet for test tokens  
- **Deployment**: Vercel

## Installation & Setup

### 1. Clone the repo
```bash
git clone https://github.com/your-username/pulse.git
cd pulse
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run locally
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Key API Routes

| Route               | Purpose                        |
|--------------------|---------------------------------|
| `/api/register`     | Register a new project          |
| `/api/log-activity` | Log a carbon-saving activity    |
| `/api/mint-credit`  | Simulate carbon credit issuance |
| `/api/get-logs`     | Retrieve all anchored logs      |

## Testing

After submitting an activity, retrieve the message ID and verify it at:

```txt
https://iotascan.com/testnet/message/{messageId}
```
> 🌍 Let’s make carbon tracking trustworthy and transparent for everyone — one immutable log at a time.