const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    shop: {
      type: String,
      required: true,
    },
    imgURL: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      default: 1,
    },
  },
  { versionKey: false, timestamps: true }
);

const Product = model("Product", productSchema);
module.exports = Product;
