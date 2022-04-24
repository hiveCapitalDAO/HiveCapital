const Alpaca = require('@alpacahq/alpaca-trade-api')

export default new Alpaca({
  keyId: process.env.ALPACA_ACCESS_KEY,
  secretKey: process.env.ALPACA_SECRET_KEY,
  paper: true,
})
