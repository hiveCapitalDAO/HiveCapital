import alpacaClient from '../alpacaClient'

export default async function handler(req, res) {
  const { symbol } = req.query

  try {
    const position = await alpacaClient.getPosition(symbol)
    res.status(200).json(position)
  } catch (err) {
    console.error(err)
    res.status(500).json({ Error: 'fetching position by symbol' })
  }
}
