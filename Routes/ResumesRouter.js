const express= require("express")
const ResumesModule= require("../Modules/ResumesModule")

const app= express.Router()

app.post("/create",ResumesModule.createResume)

app.get('/fetch',ResumesModule.fetchResume)


module.exports=app