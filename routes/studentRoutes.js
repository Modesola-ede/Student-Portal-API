const express = require("express")

const studentRoute = express.Router()
const { createStudent, getSinglestudent, updateStudent, deleteStudent} 
= require("../controllers/studentControllers.js")

studentRoute.post("/new-student", createStudent)
studentRoute.get("/get-one-student/:id", getSinglestudent)
studentRoute.delete("/delete-student/:id", deleteStudent)
studentRoute.patch("/update-student/:id", updateStudent)


module.exports = studentRoute