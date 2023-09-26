import express from 'express'
import userRouter from './features/users/users.routes.js';
import connection from './config/mongoose.js';
import bodyParser from 'body-parser';
import patientsRouter from './features/patients/patients.routes.js';
import Authentication from './config/authentication.js';
import reportsRouter from './features/reports/reports.routes.js';
import dotenv from 'dotenv';
import cors from "cors"
import session from 'express-session';
dotenv.config();
//initializing server
const server = express();

server.use(cors());

//using body parser for parsing request body
server.use(bodyParser.json())

server.use(
    session({
        secret:"XPJ2u7E8XJ02TTDOdlKXBtyQfgJRjknN",
        resave:false,
        saveUninitialized:true,
        cookie:{secure:false}
    })
)

//checking if app is running or not
server.get("/",(req,res)=>{
    res.send("app is running successfully")
})


//routing for different API calls
server.use("/api/doctors",userRouter)
server.use("/api/patients",Authentication.verifyToken, patientsRouter)
server.use("/api/reports",Authentication.verifyToken,  reportsRouter)
server.use("/api/users",userRouter)

//listning to server at port 3500
server.listen(process.env.PORT || 3500,()=>{
    console.log("listning")
})