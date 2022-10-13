const mongoose = require("mongoose");
const {Schema} = mongoose;
//const Product = require("./Product");


const CartSchema = new Schema({
    products_ids: [{type: Schema.Types.ObjectId, ref : 'product' }]
});



module.exports = mongoose.model('cart', CartSchema); 















