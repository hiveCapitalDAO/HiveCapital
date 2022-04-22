const axios = require('axios')

export default axios.create({
  baseURL: 'https://api-public.sandbox.exchange.coinbase.com/',
  responseType: 'json',
})
