import express from "express"
import {nanoid} from "nanoid"
import dotenv from "dotenv"
import connectDB from "./src/config/monogo.config.js"
import  urlSchema from "./src/models/short_url.model.js"
import short_url from "./src/models/short_url.model.js"
import  {redirectFromShortUrl} from "./src/controllers/short_url.controller.js"
import {errorHandler} from "./src/utils/errorHandler.js"
import cors from "cors"

dotenv.config("./.env");



const app =express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api/create",short_url)

app.get("/:id",redirectFromShortUrl)

app.use(errorHandler)


app.listen(3000,()=>{
    connectDB()
    console.log("server is running on http://localhost:3000");
})