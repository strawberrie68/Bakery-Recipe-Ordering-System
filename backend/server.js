const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')
// const connectDB = require("./config/database");


require("dotenv").config();


// routes
const recipeRouter = require('./routes/recipe')
const supplierRouter = require('./routes/supplier');


const app = express();
const port = process.env.PORT || 6012;

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.ATLAS_URI, {
        useNewUrlParser: true,
      });
  
      console.log(`MongoDB Established Successfully: ${conn.connection.host}`);
  
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  };


app.use(cors());
app.use(express.json());

//  routes
app.use('/recipe', recipeRouter);
app.use('/supplier', supplierRouter);


connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port: ${port}`)
    })
})




