// todo - Declare Variables
const express = require("express");
const app = express();
const PORT = 9001;
const mongoose = require("mongoose");

  // *Import functions / routes
const connectDB = require("./config/database")
const homeRoutes = require("./routes/home")
const editRoutes = require('./routes/edit')

require('dotenv').config({path: './config/.env'})

// todo - Connect to Database
connectDB()

// todo - Set the Middleware
app.set("view engine", "ejs")
app.use(express.static('public'))

// Required to parse form POST requests - sending the data
app.use(express.urlencoded({ extended: true }));


// todo - Set Routes
app.use('/edit', editRoutes)
app.use('/', homeRoutes)


// todo - Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}, better go catch it!`));
