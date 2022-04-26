import alpacaClient from './alpacaClient'

export default async function handler(req, res) {
  const params = {
    status: req.query.status,
    asset_class: req.query.asset_class,
    exchange: req.query.exchange,
  }

  try {
    const assets = await alpacaClient.getAssets(params)
    res.status(200).json(assets)
  } catch (err) {
    res.status(500).json({ Error: 'Fetching all assets' })
  }
}
