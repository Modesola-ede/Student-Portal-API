import express from "express";

import mongoose from "mongoose";

import studentRoute from './routes/studentRoutes.js';

const compass_string = "mongodb://localhost:27017/StudentDataBase";
const atlas = "mongodb+srv://modesolaedebor_db_user:BeefStew_ILoveChickenMoreThough123@cluster0.cjj5diy.mongodb.net/StudentDataBase?appName=Cluster0"


mongoose.connect(compass_string)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("Connection Error: ", err));

const app = express();
const port = 5559

app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Server is active")
})

app.use("/students", studentRoute)

app.listen(port,()=>{
    console.log(`Server is up and running on port ${port}`)
})