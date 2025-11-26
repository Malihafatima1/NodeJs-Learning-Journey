const mongoose = require("mongoose");
const Student = require("./models/Student");

const students = [
    { id: 1, name: "Maliha", course: "MCA" },
    { id: 2, name: "Ali", course: "BCA" },
    { id: 3, name: "Sara", course: "MBA" }
  ];



async function seedDB() {
    try {
      await mongoose.connect("mongodb://admin:admin123@127.0.0.1:27017/student_mvc?authSource=admin");
  
      console.log("DB Connected");
  
      await Student.deleteMany();  // Clear old data
      await Student.insertMany(students);
  
      console.log("Data inserted successfully");
      mongoose.disconnect();
    } catch (error) {
      console.error(error);
    }
  }
  
  seedDB();