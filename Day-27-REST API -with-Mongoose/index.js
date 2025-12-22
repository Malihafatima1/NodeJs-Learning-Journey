import mongoose from 'mongoose'
import express from 'express'
import studentModel from "./model/studentModel.js";


const app=express();



await mongoose.connect(
  "mongodb://admin:admin123@127.0.0.1:27017/School?authSource=admin"
);

console.log("________connected______________");



app.get('/', async (req, res) => {
    try {
      const studentData = await studentModel.find();
      console.log("Data from DB:", studentData); // log to terminal
      res.json(studentData);
    } catch (err) {
      console.error("Error fetching students:", err);
      res.status(500).send("Error fetching students");
    }
  });
  

app.listen(3000)
