const express = require("express");
const router = express.Router();
const controllerWrapper = require("../../helpers/controllerWrapper");
const addOrder = require("../../controllers/orders/addOrder");

router.post("/", controllerWrapper(addOrder));
module.exports = router;
