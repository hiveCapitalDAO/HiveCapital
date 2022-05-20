import client from '../../../auth.js'

export default async function handler(req, res) {
  const { stake_address } = req.query
  console.log(stake_address)
  try {
    const response = await client.accountsAddressesAssets(stake_address)
    res.status(200).json(response)
  } catch (err) {
    res.status(500).json({ Error: 'Fetching alpaca accounts' })
  }
}
