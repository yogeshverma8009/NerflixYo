//step 1

import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routers/userRoutes.js";
import cors from "cors";


databaseConnection();

dotenv.config({
    path:".env"
})

const app = express();
//middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
    origin:"http://localhost:3000",
    credentials:true,
}
app.use(cors(corsOptions));

app.get("/",(req,res)=>{
    res.status(200).json({
        message:"thanku",
        success:true
    })
})

//api
app.use("/api/v1/user",userRoute);
//http://localhost:8080/api/v1/user/resgister
//http://localhost:8080/api/v1/user/login

app.listen(process.env.PORT,() =>{
    console.log(`Server listen at port ${process.env.PORT}`);
});