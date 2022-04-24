import coinbaseAuth from './auth'
import axios from './axios'

export default async function handler(req, res) {
  const body = {
    profile_id: req.body.profile_id,
    before: req.body.before,
    after: req.body.after,
    limit: req.body.limit,
    type: req.body.type,
  }

  const [cb_access_sign, timestamp] = coinbaseAuth(
    'GET',
    '/transfers',
    JSON.stringify(body),
  )

  try {
    const response = await axios({
      method: 'GET',
      url: 'transfers',
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
    res.status(400).json({ Error: `Fetching transfers: ${err}` })
  }
}
