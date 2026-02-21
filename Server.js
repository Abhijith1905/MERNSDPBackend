const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require('dotenv').config();

const dburl =  process.env.AZURE_COSMOS_CONNECTIONSTRING || process.env.mongodburl;

mongoose.connect(dburl).then(() => {
    console.log("Connected to DB Successfully")
}).catch((err) => {
    console.log(err.message)
});

const app = express()
app.use(express.json())
app.use(cors())

const adminrouter = require("./routes/adminroutes")
const facultyrouter = require("./routes/facultyroutes")
const studentrouter = require("./routes/studentroutes")

app.use("", adminrouter)
app.use("", facultyrouter)
app.use("", studentrouter)

const port = process.env.PORT || 2000;
app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
})
