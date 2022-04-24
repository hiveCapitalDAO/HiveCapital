import alpacaClient from './alpacaClient'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const body = {
        symbol: req.body.symbol,
        qty: req.body.qty,
        notional: req.body.notional,
        side: req.body.side,
        type: req.body.type,
        time_in_force: req.body.time_in_force,
        limit_price: req.body.limit_price,
        stop_price: req.body.stop_price,
        trail_price: req.body.trail_price,
        trail_percent: req.body.trail_percent,
        extended_hours: req.body.extended_hours,
        client_order_id: req.body.client_order_id,
        order_class: req.body.order_class,
        take_profit: req.body.take_profit,
        stop_loss: req.body.stop_loss,
      }
      const response = await alpacaClient.createOrder(body)
      res.status(200).json(response)
    } catch (err) {
      res.status(500).json({ Error: 'Creating new order' })
    }
  } else if (req.method === 'GET') {
    const params = {
      status: req.query.status,
      after: req.query.after,
      limit: req.query.limit,
      until: req.query.until,
      direction: req.query.direction,
      nested: req.query.nested,
      symbols: req.query.symbols,
    }

    try {
      const orders = await alpacaClient.getOrders(params)
      res.status(200).json(orders)
    } catch (err) {
      res.status(500).json({ Error: 'Getting list of orders' })
    }
  } else if (req.method === 'DELETE') {
    try {
      const deleteOrders = await alpacaClient.cancelAllOrders()
      res.status(200).json(deleteOrders)
    } catch (err) {
      res.status(500).json({ Error: 'Deleting all orders' })
    }
  }
}
