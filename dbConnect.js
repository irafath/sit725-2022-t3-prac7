/**
 * Created by Iram
 */

require('dotenv').config()

//mongoDb connection...
const MongoClient = require('mongodb').MongoClient;

//add database connection...
const uri = 'mongodb+srv://Fathima:<password>@cluster0.hogzu7x.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri, {useNewUrlParser: true})


client.connect((err,db) => {
    if(!err) {
        console.log('MongoDB Connected')
    }
    else {
        console.log("DB Error: ", err);
        process.exit(1);
    }
})

module.exports = client;