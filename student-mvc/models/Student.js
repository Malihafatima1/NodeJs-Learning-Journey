const mongoose = require("mongoose");


const studentSchema = new mongoose.Schema({
  id: Number,
  name: String,
  course: String
});

module.exports = mongoose.model("Student", studentSchema);
