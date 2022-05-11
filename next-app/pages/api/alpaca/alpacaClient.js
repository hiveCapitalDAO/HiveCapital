const Alpaca = require('@alpacahq/alpaca-trade-api')
require('dotenv').config()

export default new Alpaca({
  keyId: process.env.ALPACA_ACCESS_KEY,
  secretKey: process.env.ALPACA_SECRET_KEY,
  paper: true,
})
