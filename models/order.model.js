const { Schema, model } = require("mongoose");
const Joi = require("joi");

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

const orderValidationSchema = Joi.object({
  deliveryData: Joi.object({
    address: Joi.string().required(),
    email: Joi.string().email().required(),
    name: Joi.string().required(),
    phone: Joi.string().required(),
  }).required(),
  productsData: Joi.array()
    .items(
      Joi.object({
        imgURL: Joi.string().required(),
        name: Joi.string().required(),
        price: Joi.number().required(),
        quantity: Joi.number().required(),
        shop: Joi.string().required(),
        _id: Joi.string().optional(),
      })
    )
    .required(),
  totalPrice: Joi.number().required(),
});
const Order = model("Order", orderSchema);
module.exports = { Order, orderValidationSchema };
