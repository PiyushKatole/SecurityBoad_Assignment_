import express from 'express'
import {verifyToken} from '../middleware/auth.js'
import {adminVerifyToken} from '../middleware/adminAuthentication.js'
import { addMovies, movieDetails , getMovies} from '../controller/movies/movies.js'
import {createSeats , viewAllSeat , updatedSeat , deleteSeats} from '../controller/movies/seats.js'
import {createShow , viewAllScreen , updateScreen , deleteScreen}from '../controller/movies/shows.js'
import {seatBooking , cancelSeatBooking} from '../controller/movies/seatBooking.js'

const router = express.Router()

// add movie router
router.post('/api/movies/add', adminVerifyToken, addMovies)

router.get('/api/movie/search', verifyToken, movieDetails)

router.get('/api/get/movies' , getMovies )

// create seate for user router

router.post('/api/create/seats' ,adminVerifyToken, createSeats)

router.get('/api/view/seat' , viewAllSeat)

router.put('/api/update/seat' ,  adminVerifyToken, updatedSeat)

router.delete('/api/delete/seat', adminVerifyToken, deleteSeats)

// create show for user router 
router.post('/api/create/show', adminVerifyToken, createShow)

router.get('/api/view/screen' ,verifyToken , viewAllScreen)

router.put('/api/update/screen' , adminVerifyToken, updateScreen)

router.delete('/api/delete/screen' , adminVerifyToken, deleteScreen)

// This router create for booking seat for user 

router.post('/api/booked/seat' , verifyToken , seatBooking)

router.delete('/api/cancle/seat' , verifyToken, cancelSeatBooking)

export default router