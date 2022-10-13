const express = require('express');
const router = express.Router();
const ctrl = require('./index');

router.post("/add", ctrl.addProductToCart);
router.delete("/remove/:_id", ctrl.removeProductFromCart);

module.exports = router;











