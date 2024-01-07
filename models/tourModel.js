const mongoose = require('mongoose')

const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A tour must have a name']
    },
    price: {
       type: Number,
       required: [true, 'A tour must have a price']
    },
    ratingsAverage: {
        type: Number,
        default: 4.5,
        mim: 1,
        max: 5
    },
    summary: {
        type: String,
        required: [true, 'A tour must have a description']
    }
})

const Tour = mongoose.model('Tour', tourSchema)
module.exports = Tour