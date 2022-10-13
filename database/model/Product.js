const mongoose = require("mongoose");
const {Schema} = mongoose;

const ProductSchema = new Schema({
    id: String, 
    name: String,
    description: String,
    features: String,
    price: String,
    keywords: String,
    url: String,
    category: String,
    subcategory: String,
    images: [{type: String}]
})

module.exports = mongoose.model("product", ProductSchema);