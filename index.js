const express= require("express")
const ResumesRouter= require("./Routes/ResumesRouter")
const UserRouter= require("./Routes/UserRouter")
const Auth= require("./Routes/Auth")
const cors= require("cors")


const app= express()

app.use(cors())

app.use(express.json())
app.use('/user',UserRouter)

app.use(Auth.Authentication)

app.use('/resume',ResumesRouter)


app.listen(3001)