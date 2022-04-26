import axios from './axios'
import coinbaseAuth from './auth'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const body = {
      profile_id: req.body.profile_id,
      type: req.body.type,
      side: req.body.side,
      product_id: req.body.product_id,
      stp: req.body.stp,
      stop: req.body.stop,
      stop_price: req.body.stop_price,
      price: req.body.price,
      size: req.body.size,
      funds: req.body.funds,
      time_in_force: req.body.time_in_force,
      cancel_after: req.body.cancel_after,
      post_only: req.body.post_only,
      client_oid: req.body.client_oid,
    }

    const [cb_access_sign, timestamp] = coinbaseAuth(
      'POST',
      '/orders',
      JSON.stringify(body),
    )

    try {
      const repsonse = await axios({
        method: 'POST',
        url: 'orders',
        headers: {
          Accept: 'application/json',
          'CB-ACCESS-KEY': process.env.CB_ACCESS_KEY,
          'CB-ACCESS-SIGN': cb_access_sign,
          'CB-ACCESS-TIMESTAMP': timestamp,
          'CB-ACCESS-PASSPHRASE': process.env.CB_PASSPHRASE,
        },
        data: body,
      })
      res.status(200).json(repsonse.data)
    } catch (err) {
      console.log(err)
      res.status(500).json({ Error: 'Creating new order' })
    }
  } else if (req.method === 'GET') {
    var queryParams = '?'
    var iteraor = 0
    for (const [key, value] of Object.entries(req.query)) {
      queryParams += key + '=' + value
      console.log(Object.keys(req.query).length)
      if (iteraor !== Object.keys(req.query).length - 1) queryParams += '&'
      iteraor++
    }
    console.log(queryParams)

    const [cb_access_sign, timestamp] = coinbaseAuth(
      'GET',
      `/orders${queryParams}`,
      '',
    )

    try {
      const repsonse = await axios({
        method: 'GET',
        url: `orders${queryParams}`,
        headers: {
          Accept: 'application/json',
          'CB-ACCESS-KEY': process.env.CB_ACCESS_KEY,
          'CB-ACCESS-SIGN': cb_access_sign,
          'CB-ACCESS-TIMESTAMP': timestamp,
          'CB-ACCESS-PASSPHRASE': process.env.CB_PASSPHRASE,
        },
      })
      res.status(200).json(repsonse.data)
    } catch (err) {
      console.log(err)
      res.status(500).json({ Error: 'Fething orders' })
    }
  }
}
