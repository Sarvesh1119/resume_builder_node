const express= require("express")
const UsersModule= require("../Modules/UsersModule")

const app= express.Router()

app.post("/create",UsersModule.createUsers)

app.post("/get",UsersModule.getUsers)

module.exports=app