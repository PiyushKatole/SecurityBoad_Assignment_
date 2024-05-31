const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const bodyparser = require('body-parser')
const cors = require('cors')
const userRouter = require('./src/router/userRouter')
const moviesRouter = require('./src/router/moviesRouter')
const foodRouter = require('./src/router/foodRouter')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT 

app.use(cors({
    origin:true,
    methods:["GET" , "POST" , "PUT" , "DELETE"],
    credentials:true
}))

app.use(bodyparser.json())
app.use(cookieParser())
app.use('/', userRouter)
app.use('/' , moviesRouter)
app.use('/' , foodRouter)

mongoose.connect('mongodb://localhost:27017/SecurityBoats')
    .then(() => {
        console.log("connecting successfully...");
    }).catch((error) => {
        console.log(error);
    })


app.listen(PORT , () =>{
    console.log(`Server running at http://localhost:${PORT}`);
})

