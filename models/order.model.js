const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
  {
    deliveryData: {
      adress: { type: String },
      email: { type: String },
      name: { type: String },
      phone: { type: String },
    },
    productsData: [
      {
        imgURL: { type: String },
        name: { type: String },
        price: { type: String },
        quantity: { type: Number },
        shop: { type: String },
      },
    ],
    totalPrice: { type: Number },
  },
  { versionKey: false, timestamps: true }
);

const Order = model("Order", orderSchema);
module.exports = Order;
