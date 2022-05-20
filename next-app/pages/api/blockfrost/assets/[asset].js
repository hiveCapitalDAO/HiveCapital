import client from '../auth'
export default async function handler(req, res) {
  const { asset } = req.query
  try {
    const response = await client.assetsById(asset)
    res.status(200).json(response)
  } catch (err) {
    res.status(500).json({ Error: 'Fetching alpaca accounts' })
  }
}
