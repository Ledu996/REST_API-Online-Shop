const ProductModel = require("../../database/model/Product");


const getAllProducts = async (req, res) => {
    try {
        const products = await ProductModel.find({});
        res.json({status: 200, message: "Successfully got products", data: products});
    } catch (err) {
        res.json({status: 500, message: "Failed to get products",});
    }
};

const getProductById = async (req, res) => {
    try {
        const {_id} = req.params;
        const product = await ProductModel.findById({_id});
        
        res.json({status: 200, message: "Successfully found product", data: product});

    } catch (err) {
        res.json({status: 500, message: "Failed to find product", data: {}});
    }
}


const filterProductByCategory = async (req, res) => { 
    try {
        const {category} = req.params;
        const filteredProducts = await ProductModel.find({category});

        res.json({status: 200, message: `Successfully getting products in category`, data: filteredProducts})
    
    } catch (err) {
        res.json({status: 500, message: "Failed to get products from category", data : []})
    }
}

const searchByNameOrDescription = async (req, res) => { 
    try { 
        const {name, description} = req.params;
        const products = await ProductModel.find({$or: [{name}, {description}]});
        res.json({status: 200, message: "Successfully found product", data: products});
    } catch (err) {
        console.log(err.message);
        res.json({status: 404, message: "Failed to find products", data: []})
    }
}


const sortProductsInAscendingOrder = async (req, res) => { 
    try {
        const products = await ProductModel.find({})
        const sortedProducts = products.sort((a, b) => a.price - b.price);
        res.json({status: 200, message: "Successfully sorted products", data: sortedProducts});
    } catch (err) {
        res.json({status: 500, message: "Enable to sort products", data: []})
    }
}

const sortInDescendingOrder = async (req, res) => {
    try {
        const products = await ProductModel.find({})
        .sort({price: -1})
        .collation({locale: "en_US", numericOrdering: true})
        res.json({status: 200, message: "Successfully sorted products", data: products});
    } catch (err) {
        res.json({status: 500, message: "Enable to sort products", data: []})
    }
}




module.exports = {
    getAllProducts,
    getProductById,
    filterProductByCategory,
    searchByNameOrDescription,
    sortProductsInAscendingOrder,
    sortInDescendingOrder 
}
























