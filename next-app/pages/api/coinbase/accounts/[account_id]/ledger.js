import coinbaseAuth from '../../auth'
import axios from '../../axios'

export default async function handler(req, res) {
  const { account_id } = req.query
  const [cb_access_sign, timestamp] = coinbaseAuth(
    'GET',
    `/accounts/${account_id}/ledger`,
    '',
  )

  try {
    const response = await axios({
      methood: 'GET',
      url: `accounts/${account_id}/ledger`,
      headers: {
        'CB-ACCESS-KEY': process.env.CB_ACCESS_KEY,
        'CB-ACCESS-SIGN': cb_access_sign,
        'CB-ACCESS-TIMESTAMP': timestamp,
        'CB-ACCESS-PASSPHRASE': process.env.CB_PASSPHRASE,
      },
    })
    res.status(200).json(response.data)
  } catch (err) {
    res.status(500).json({ Error: `Error get account by id: ${err}` })
  }
}
