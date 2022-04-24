import coinbaseAuth from '../auth'
import axios from '../axios'

export default async function handler(req, res) {
  const body = {
    profile_id: req.body.profile_id,
    amount: req.body.amount,
    currency: req.body.currency,
    payment_method_id: req.body.payment_method_id,
  }

  const [cb_access_sign, timestamp] = coinbaseAuth(
    'POST',
    '/withdrawals/payment-method',
    JSON.stringify(body),
  )

  try {
    const response = await axios({
      method: 'POST',
      url: 'withdrawals/payment-method',
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
    res.status(500).json({ Error: `Posting withdraw to payment method ${err}` })
  }
}
