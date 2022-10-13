const express = require("express");
const router = express.Router();
const ctrl = require("./index");


router.get("/all", ctrl.getAllProducts); 
router.get("/sorted/ascending", ctrl.sortProductsInAscendingOrder); 
router.get("/sorted/descending", ctrl.sortInDescendingOrder); 
router.get("/:_id", ctrl.getProductById); 
router.get("/category/:category", ctrl.filterProductByCategory); 
router.get("/name/:name/description/:description", ctrl.searchByNameOrDescription); 



module.exports = router;



