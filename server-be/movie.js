const { default: mongoose } = require('mongoose');
const Mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
   
    movieName: {
        type: String,
        required: true
    },
    thumbnailUrl: {
        type: String,
        
    },
    movieUrl: {
        type: String,
        required: true
    },  
    movieDescription: {
        type: String,
        
    },
    isPaid: {
        type: Boolean,
        default: false
    }
})


const Movie = Mongoose.model('Movie',movieSchema);

module.exports = Movie