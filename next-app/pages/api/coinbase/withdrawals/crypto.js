import coinbaseAuth from '../auth'
import axios from '../axios'

export default async function handler(req, res) {
  const body = {
    profile_id: req.body.profile_id,
    amount: req.body.amount,
    currency: req.body.currency,
    crypto_address: req.body.crypto_address,
    destination_tag: req.body.destination_tag,
    no_destination_tag: req.body.no_destination_tag,
    two_factors_code: req.body.two_factors_code,
    nonce: req.body.nonce,
    fee: req.body.fee,
  }

  const [cb_access_sign, timestamp] = coinbaseAuth(
    'POST',
    '/withdrawals/crypto',
    JSON.stringify(body),
  )

  try {
    const response = await axios({
      method: 'POST',
      url: 'withdrawals/crypto',
      headers: {
        Accept: 'application/json',
        'CB-ACCESS-KEY': process.env.CB_ACCESS_KEY,
        'CB-ACCESS-SIGN': cb_access_sign,
        'CB-ACCESS-TIMESTAMP': timestamp,
        'CB-ACCESS-PASSPHRASE': process.env.CB_PASSPHRASE,
      },
      data: body,
    })
    res.status(200).json(response.data)
  } catch (err) {
    console.log(err)
    res.status(500).json({ Error: `Fetching withdrawls crytpo ${err}` })
  }
}
