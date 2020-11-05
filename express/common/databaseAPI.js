/*===================================
|| 
|| Database
|| 
===================================*/
/*---------------------------
| Resource
---------------------------*/
const mongoose = require('mongoose');
mongoose.promise = global.Promise;
require('dotenv').config();
const mongoConn = process.env.MONGO_DB_CONN;


const databaseAPI = {
    /* Open Connection ---------------------------*/
    open: () => {
        /* Connecting to Mongo ---------------------------*/
        console.log('Mongo: Connecting');
        mongoose.connect(mongoConn,  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
    },
    /* Query ---------------------------*/
    query: (handler) => {
        /* Using connection ---------------------------*/
        console.log('Mongo: Using Connection');
        mongoose.connection
            .once('open', () => { 
                console.log('Mongo: Connection Success');
                handler();
            })
            .on('error', (error) => {
                console.log('Mongo: Connection Error', error);
                mongoose.connection.close();
            });
    },
    /* Close Connection ---------------------------*/
    close: () => {
        console.log('Mongo: Clean Up');
        mongoose.connection.close();
    },
}

module.exports = databaseAPI;