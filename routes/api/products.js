const express = require("express");
const router = express.Router();
const controllerWrapper = require("../../helpers/controllerWrapper");
const getProducts = require("../../controllers/products/getProducts");
const getProductsByShop = require("../../controllers/products/getProductsByShop");

router.get("/", controllerWrapper(getProducts));
router.get("/:shop", controllerWrapper(getProductsByShop));

module.exports = router;
