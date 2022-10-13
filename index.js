const express = require("express");
const app = express();
const {connect} = require("./database/connection/index");

const productRoutes = require("./services/product/routes");
const cartRoutes = require("./services/cart/routes");

app.use(express.json());
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);


const startHttpServer = async () => {
    await connect();
    app.listen(5000, () => console.log("Server started at port 5000"));
};


startHttpServer();

