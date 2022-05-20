import client from '../auth.js'

export default async function handler(req, res) {
  const { stake_address } = req.query
  try {
    const response = await client.accounts(stake_address)
    res.status(200).json(response)
  } catch (err) {
    res.status(500).json({ Error: 'Fetching alpaca accounts' })
  }
}
