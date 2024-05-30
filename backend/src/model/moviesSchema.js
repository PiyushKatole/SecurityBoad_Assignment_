const mongoose = require('mongoose')

const moviesSchema = new mongoose.Schema({
    title: String,
    description: String,
    duration: Number,
    releaseDate: Date(),
    genre: [String],
    rating: Number

})

const showSchema = new mongoose.Schema({
    movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie', required: true
    },

    screen: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Screen', required: true
    },

    startTime: { type: Date, required: true },

    seats: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Seat'
    }]
});

const seatSchema = new mongoose.Schema({
    screen: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Screen', required: true
    },
    row: {
        type: String, required: true
    },

    number: {
        type: Number, required: true
    },

    isBooked: {
        type: Boolean, default: false
    },

});

const bookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', required: true
    },

    show: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Show', required: true
    },

    seats: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Seat', required: true
    }],

    bookingTime: {
        type: Date, default: Date.now
    },

    totalPrice: {
        type: Number, required: true
    },

});

const Movie = mongoose.model('Movie' , moviesSchema);

const Booking = mongoose.model('Booking', bookingSchema);

const Seat = mongoose.model('Seat', seatSchema);

const Show = mongoose.model('Show', showSchema);

module.exports = {Movie , Booking , Seat , Show}