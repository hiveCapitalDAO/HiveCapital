import axios from './axios'
import coinbaseAuth from './auth'

export default async function handler(req, res) {
  const body = {
    profile_id: req.body.profile_id,
    from: req.body.from,
    to: req.body.to,
    amount: req.body.amount,
    nonce: req.body.nonce,
  }

  const [cb_access_sign, timestamp] = coinbaseAuth(
    'POST',
    '/conversions',
    JSON.stringify(body),
  )

  try {
    const respose = await axios({
      method: 'POST',
      url: 'conversions',
      headers: {
        Accept: 'application/json',
        'CB-ACCESS-KEY': process.env.CB_ACCESS_KEY,
        'CB-ACCESS-SIGN': cb_access_sign,
        'CB-ACCESS-TIMESTAMP': timestamp,
        'CB-ACCESS-PASSPHRASE': process.env.CB_PASSPHRASE,
      },
      data: body,
    })
    res.status(200).json(respose.data)
  } catch (err) {
    console.log(err)
    res.status(500).json({ Error: 'failed conversion' })
  }
}
