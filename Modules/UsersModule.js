const database= require("../connect")
const bcrypt= require("bcrypt")
const jwt= require("jsonwebtoken")

database.connect()


module.exports.createUsers= async (req,res,next) => {
    try{
        let existingUser= await database.db.collection("users").findOne({email:req.body.email})
        if(existingUser){
            console.log("existing user")
            return res.send({"msg":"User already exists."})
        }
        let salt=await bcrypt.genSalt(5)
        console.log(req.body.password)
        req.body.password=await bcrypt.hash(req.body.password,salt)
        let data=await database.db.collection("users").insertOne({...req.body})
        return res.send(data)
    }catch(e){
        console.log(e)
        return res.send(e.msg)
    }
}

module.exports.getUsers= async (req,res,next) => {
    try{
        console.log(req.body)
        let existingUser= await database.db.collection("users").findOne({email:req.body.username})
        if(!existingUser){
            return res.send({msg:"User does not exist."})
        }
        let isValid= await bcrypt.compare(req.body.password,existingUser.password)
        if(!isValid){
            return res.send({msg:"Password incorrect."})
        }
        let token= jwt.sign(existingUser,"AGILI",{expiresIn:"60min"})

        return res.send(token)
    }catch(e){
        console.log(e)
    }
}