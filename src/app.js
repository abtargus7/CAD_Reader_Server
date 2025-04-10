import express from 'express'
import cors from 'cors'
import pool from './db/index.js'

const app = express()

app.use(cors())
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true}))


//middlewares


//routes
app.get('/', async(req, res) => {
    const result = await pool.query("SELECT current_database()")
    res.send(`DB_NAME : ${result.rows[0].current_database}`)
})

//error handling


//create tables


export {app}