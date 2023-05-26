const Order = require("../../models/order.model");

const addOrder = async (req, res, next) => {
  const order = await Order.create(req.body);
  res.status(200).send(order);
};

module.exports = addOrder;
