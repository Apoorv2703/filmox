const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

function connectDatabase(){
    // const mongoUri = 
    const mongoUri = process.env.MONGODB_URI
    mongoose.connect(mongoUri)
    .then(() => {console.log ('database is connected')})
}

module.exports ={
    connectDatabase
}
