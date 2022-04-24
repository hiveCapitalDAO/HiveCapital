import alpacaClient from './alpacaClient'

export default async function handler(req, res) {
  try {
    const response = await alpacaClient.getAccount()
    res.status(200).json(response)
  } catch (err) {
    res.status(500).json({ Error: 'Fetching alpaca accounts' })
  }
}
