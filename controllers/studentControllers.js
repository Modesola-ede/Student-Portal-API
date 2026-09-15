const studentModel = require('../models/studentModel')

//CREATE student 
 const createStudent = async (req, res) => {
    try {
        const { name, email, regNo } = req.body
        const student = await studentModel.create({
            name, email, regNo
        })
        return res.status(201).json({
            message: "Student profile created successfully",
            data: student
        })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

//SINGLE GET :
 const getSinglestudent = async (req, res) => {
    try {
        const { id } = req.params

        const getSingle = await studentModel.findById(id)

        if (!getSingle) {
            return res.status(404).json({
                message: "Student not found"
            })
        }
        return res.status(200).json({
            message: "Student profile fetched successfully",
            data: getSingle
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
  }
//findById
//find_by_id
//UPDATE student :
 const updateStudent = async (req, res) => {
    try {
        const { id } = req.params
        const { name} = req.body
        const update = await studentModel.findByIdAndUpdate(Id, {
            name
        }, { new: true })

        return res.status(200).json({
            message: "Student profile updated successfully",
            data: update
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
  }


//DELETE student :
 const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params
        const deleteStudent = await studentModel.findByIdAndDelete(Id)
        return res.status(200).json({
            message: "Student profile deleted successfully",
            data: deleteStudent
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
  }

module.exports = { createStudent, getSinglestudent, updateStudent, deleteStudent}