const database= require("../connect")
const jwt= require("jsonwebtoken")

database.connect()

exports.Authentication= async (req,res,next) => {
    if(!req.headers.token){
        return res.status(400).send({msg:"no token found"})
    }
    try{
        jwt.verify(req.headers.token,"AGILI")
        next()
    }
    catch(e){
        return res.status(401).send({msg:"unauthorized"})
    }
}