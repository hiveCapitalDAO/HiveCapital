import alpacaClient from '../alpacaClient'

export default async function handler(req, res) {
  const { id } = req.query

  try {
    const asset = await alpacaClient.getAsset(id)
    res.status(200).json(asset)
  } catch (err) {
    res.status(500).json({ Error: 'Fetching asset by id' })
  }
}
