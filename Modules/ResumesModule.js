const database= require("../connect")


database.connect()

module.exports.createResume= async (req,res,next) => {
    try{
        let data= await database.db.collection("resumes").insertOne({...req.body})
        console.log(data)
        return res.send(data)
    }catch(e){
        console.error(e)
    }
}

module.exports.fetchResume= async (req,res,next) => {
    try{
        let data= await database.db.collection("resumes").find().toArray()
        console.log(data)
        return res.send(data)
    }catch(e){
        console.error(e)
    }
}

module.exports.createUsers= async (req,res,next) => {
    try{
        let data=await database.db.collection("users").insertOne({...req.body})
        return res.send(data)
    }catch(e){
        console.log(e)
    }
}