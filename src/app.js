import express from 'express'
import cors from 'cors'

const app = express()

//middlewares
app.use(cors())
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))



//routes

//create tables


export {app}