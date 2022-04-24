import coinbaseAuth from '../../auth'
import axios from '../../axios'

export default async function handler(req, res) {
  const { account_id } = req.query
  console.log(account_id)

  const [cb_access_sign, timestamp] = coinbaseAuth(
    'POST',
    `/coinbase-accounts/${account_id}/addresses`,
    '',
  )

  try {
    const response = await axios({
      method: 'POST',
      url: `coinbase-accounts/${account_id}/addresses`,
      headers: {
        Accept: 'application/json',
        'CB-ACCESS-KEY': process.env.CB_ACCESS_KEY,
        'CB-ACCESS-SIGN': cb_access_sign,
        'CB-ACCESS-TIMESTAMP': timestamp,
        'CB-ACCESS-PASSPHRASE': process.env.CB_PASSPHRASE,
      },
    })
    res.status(200).json(response.data)
  } catch (err) {
    console.log(err)
    res.status(500).json({ Error: 'Failed generating one time crypto address' })
  }
}
