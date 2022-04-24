import coinbaseAuth from '../auth'
import axios from '../axios'

export default async function handler(req, res) {
  const reqBody = {
    profile_id: req.body.profile_id,
    amount: req.body.amount,
    payment_method_id: req.body.payment_method_id,
    currency: req.body.currency,
  }
  const [cb_access_sign, timestamp] = coinbaseAuth(
    'POST',
    '/deposits/payment-method',
    JSON.stringify(reqBody),
  )

  try {
    const response = await axios({
      method: 'POST',
      url: 'deposits/payment-method',
      headers: {
        Accept: 'application/json',
        'CB-ACCESS-KEY': process.env.CB_ACCESS_KEY,
        'CB-ACCESS-SIGN': cb_access_sign,
        'CB-ACCESS-TIMESTAMP': timestamp,
        'CB-ACCESS-PASSPHRASE': process.env.CB_PASSPHRASE,
      },
      data: reqBody,
    })
    console.log(response)
    res.status(200).json(response.data)
  } catch (err) {
    console.log(err)
    res
      .status(500)
      .json({ Error: `Failed to deposit from payment-method: ${err}` })
  }
}
