const express = require('express')
const {verifyToken} = require('../middleware/auth')
const { addMovies, movieDetails } = require('../controller/movies/movies')
const {createSeats , viewAllSeat , updatedSeat , deleteSeats} = require('../controller/movies/seats')
const {createShow , viewAllScreen , updateScreen , deleteScreen} = require('../controller/movies/shows')
const {seatBooking , cancelSeatBooking} = require('../controller/movies/seatBooking')

const router = express.Router()

// add movie router
router.post('/api/movies/add', addMovies)

router.get('/api/movie/search', movieDetails)

// create seate for user router

router.post('/api/create/seats' , createSeats)

router.get('/api/view/seat' , viewAllSeat)

router.put('/api/update/seat' , updatedSeat)

router.delete('/api/delete/seat' , deleteSeats)

// create show for user router 
router.post('/api/create/show', createShow)

router.get('/api/view/screen' , viewAllScreen)

router.put('/api/update/screen' , updateScreen)

router.delete('/api/delete/screen' , deleteScreen)

// This router create for booking seat for user 

router.post('/api/booked/seat' , verifyToken , seatBooking)

router.delete('/api/cancle/seat' , cancelSeatBooking)

module.exports = router