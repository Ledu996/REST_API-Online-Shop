const CartModel = require("../../database/model/Cart");


const addProductToCart = async (req, res) => { // can put it inside body
    try {
        const {_id} = req.body;
        console.log(_id);
        await CartModel.findOneAndUpdate({
            _id : "63470bf6efe681aa6e7b3468"
        },

        {
            $addToSet: {products_ids : _id}
        })
        
        res.json({status: 200, message: "Successfully added products to the cart"});
    
    } catch (err) {
        res.json({status: 500, message: "Failed to add product to cart"});
    }
};

const removeProductFromCart = async (req, res) => {
    try {
        const {_id} = req.params;
        await CartModel.findOneAndUpdate({
            _id : "63470bf6efe681aa6e7b3468"
        }, 
        {
            $pull: {products_ids : _id}
        })
        res.json({status: 200, message: "Product successfully removed from cart."});
    } catch (err) {
        res.json({status: 500, message: "Failed to remove product from cart."});
    }
};


module.exports = {
    addProductToCart,
    removeProductFromCart
};















