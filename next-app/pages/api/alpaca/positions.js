import alpacaClient from './alpacaClient'

export default async function handler(req, res) {
  try {
    const positions = await alpacaClient.getPositions()
    res.status(200).json(positions)
  } catch (err) {
    res.status(500).json({ Error: 'Fetching all positions' })
  }
}
