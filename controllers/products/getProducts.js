const createError = require("../../helpers/createError");
const Product = require("../../models/products.model");

const getProducts = async (req, res, next) => {
  const products = await Product.find();
  if (!products) {
    const error = createError(404, "Product not found");
    throw error;
  }
  res.status(200).json(products);
};

module.exports = getProducts