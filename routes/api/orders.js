const express = require("express");
const router = express.Router();
const controllerWrapper = require("../../helpers/controllerWrapper");
const addOrder = require("../../controllers/orders/addOrder");
const { orderValidationSchema } = require("../../models/order.model");
const validationMiddleware = require("../../middlewares/validation.middleware");

router.post(
  "/",
  validationMiddleware(orderValidationSchema),
  controllerWrapper(addOrder)
);
module.exports = router;
