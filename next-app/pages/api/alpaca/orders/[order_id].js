import alpacaClient from '../alpacaClient'

export default async function handler(req, res) {
  const { order_id } = req.query
  if (req.method === 'GET') {
    try {
      const order = await alpacaClient.getOrder(order_id)
      res.status(200).json(order)
    } catch (err) {
      res.status(500).json({ Error: 'Fetching order by id' })
    }
  } else if (req.method === 'DELETE') {
    try {
      const deleteOrder = await alpacaClient.cancelOrder(order_id)
      res.status(200).json(deleteOrder)
    } catch (err) {
      res.status(500).json({ Error: 'Deleting order by id' })
    }
  }
}
