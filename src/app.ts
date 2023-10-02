import express from 'express';
import dotenv from 'dotenv';

const app = express()
dotenv.config()
const Port = process.env.PORT




app.listen(Port, ()=>{
    console.log(`App is listening on Port ${Port}`)
})