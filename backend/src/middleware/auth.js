const jwt = require('jsonwebtoken')
const {users}  = require('../model/userSchema')

const createToken = (email) =>{
    return jwt.sign({email} , process.env.SecretKey , {expiresIn:'1h'})
}

const verifyToken = async(req , res , next) =>{
    
    const token = req.cookies.token || req.headers['authorization'];
    if (!token){
        return res.status(401).json({error : "Access denied. No token provided."})
    }

    try {
        const decodeToken = jwt.verify(token , process.env.SecretKey)
        const getUserData = await users.findOne({email: decodeToken.email})
        console.log(getUserData);
        req.user = getUserData
        next()

    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Something went wrong in verify token function"})
    }
}

module.exports = {createToken , verifyToken}