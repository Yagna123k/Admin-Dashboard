const mongoose = require('mongoose')

require("dotenv").config()

async function connectMongoDB() {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MongoURI)
        console.log("Connected to MongoDB🚀")
    }
    catch {
        (err => {
            console.log("Failed to Connect with MongoDB😵", err)
        })
    }
}

module.exports = connectMongoDB