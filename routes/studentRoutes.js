import express from "express"

const studentRoute = express.Router();

import { createStudent, getSinglestudent, updateStudent, deleteStudent } from "../controllers/studentControllers.js"

studentRoute.post("/new-student", createStudent)
studentRoute.get("/get-one-student/:id", getSinglestudent)
studentRoute.delete("/delete-student/:id", deleteStudent)
studentRoute.patch("/update-student/:id", updateStudent)

export default studentRoute