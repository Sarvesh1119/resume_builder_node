const {MongoClient} = require("mongodb")

module.exports={
    db:null,
    async connect(){
        try{
            const connection= await MongoClient.connect("mongodb+srv://sarvesh:8ZiTvYQ9g1oIdRhw@cluster0.hz7ya.mongodb.net?retryWrites=true&w=majority")
            this.db= connection.db("ResumeDB")
        }catch(e){
            console.error(e)
        }
    }
}