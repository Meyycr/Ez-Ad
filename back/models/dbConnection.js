const mongoose = require("mongoose");

const option = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
const server = '127.0.0.1:27017';

const initDbConnection = () => {
    const db = mongoose.createConnection(`mongodb://${server}`, option);

    db.on("error", console.error.bind(console, "MongoDB Connection Error>> : "));
    db.once("open", () => {
        console.log("client MongoDB Connection ok!");
    });
    require('./Ad')
    require('./User')
    return db;
};

const getUser = (conn) => {
    const db = conn.useDb('ez_adUser');
    return db.model('User');
};
const getAd = (conn) => {
    const db = conn.useDb('ez_adAd');
    return db.model('Ad');
};


module.exports = {
    initDbConnection,
    getUser,
    getAd
};