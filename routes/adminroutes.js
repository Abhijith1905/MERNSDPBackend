const admincontroller = require("../controllers/admincontroller")

const express = require("express")
const adminrouter = express.Router()

// admin routes
adminrouter.get("/",admincontroller.demo)
adminrouter.post("/checkadminlogin",admincontroller.checkadminlogin)
adminrouter.post("/checkusername",admincontroller.checkusername)
adminrouter.post("/resetadminpassword",admincontroller.resetadminpassword)
adminrouter.post("/insertstudent",admincontroller.insertstudent)
adminrouter.post("/insertfaculty",admincontroller.insertfaculty)
adminrouter.post("/createcourse",admincontroller.createcourse)
adminrouter.get("/viewstudents",admincontroller.viewstudents)
adminrouter.get("/viewfaculty",admincontroller.viewfaculty)
adminrouter.get("/viewcourse",admincontroller.viewcourse)
adminrouter.get("/handoutfile/:filename",admincontroller.handoutfile)
adminrouter.delete("/deletestudent/:studentid",admincontroller.deletestudent)
adminrouter.delete("/deletefaculty/:facultyid",admincontroller.deletefaculty)
adminrouter.delete("/deletecourse/:coursecode",admincontroller.deletecourse)
adminrouter.post("/allocatecourse",admincontroller.allocateFacultyToCourse)
adminrouter.post("/insertSection",admincontroller.insertSection)
adminrouter.get("/viewsections",admincontroller.viewsections)   
adminrouter.get("/viewcoursefacultyallocation",admincontroller.viewcoursefacultyallocation)

module.exports = adminrouter
