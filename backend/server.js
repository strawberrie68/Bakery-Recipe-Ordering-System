const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')
const connectDB = require("./config/database");


require("dotenv").config({ path: "./config/.env" });


// routes
const recipeRouter = require('./routes/recipe')
const supplierRouter = require('./routes/supplier');


const app = express();
const port = process.env.PORT || 6012;


app.use(cors());
app.use(express.json());


connectDB()

//  routes
app.use('/recipe', recipeRouter);
app.use('/supplier', supplierRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})