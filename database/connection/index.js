const mongoose = require('mongoose');




const connect = async () => {
    try {
        const uri = "mongodb+srv://user1:12345@baza.avgt5.mongodb.net/30HillsShop?authSource=admin&replicaSet=atlas-pd40k4-shard-0&readPreference=primary&ssl=true";
        await mongoose.connect(uri);
        console.log("Connection established")
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    connect
}



