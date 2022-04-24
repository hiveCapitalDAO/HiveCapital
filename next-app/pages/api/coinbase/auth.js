const crypto = require('crypto')

export const coinbaseAuth = (reqMethod, reqPath, reqBody) => {
  const timestamp = Date.now() / 1000
  var method = reqMethod
  const message = timestamp + method + reqPath + reqBody
  var key = Buffer(process.env.CB_SECRET_KEY, 'base64')
  var hmac = crypto.createHmac('sha256', key)
  return [hmac.update(message).digest('base64'), timestamp]
}

export default coinbaseAuth
