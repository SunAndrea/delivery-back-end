const { Order } = require("../../models/order.model");

const getOrder = async (req, res, next) => {
  console.log(req.query);

  const { phone } = req.query;
  const cleanedPhone = phone.trim().replace(/\s+/g, "");
  const searchPhone = `+${cleanedPhone}`;
  console.log(`searchPhone`, searchPhone);
  const orders = await Order.find({ "deliveryData.phone": searchPhone });

  res.status(200).send(orders);
};

module.exports = getOrder;
