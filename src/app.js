import express from 'express'
import cors from 'cors'
import fileRouter from './routes/file.routes.js'

const app = express()

//middlewares
app.use(cors())
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))



//routes
app.use('/api/v1/file', fileRouter)


//create tables


export {app}