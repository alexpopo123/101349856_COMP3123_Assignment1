const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    first_name: {
      type: String,
      required: true,
      trim: true,
      maxLength: 100,
      lowercase: true
    },
    last_name: {
      type: String,
      required: true,
      trim: true,
      maxLength: 50,
      lowercase: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true, 
      maxLength: 50,
      lowercase: true
    },
    gender: {
      type: String,
      required: true,
      trim: true,
      maxLength: 25,
      lowercase: true
    },
    salary: {
      type: Number,
      default: 0.0,
      validate(value) {
        if (value < 0.0) throw new Error("Negative Salary aren't real.");
      }
    },
  });
  
  const Employee = mongoose.model("Employee", EmployeeSchema);
  module.exports = Employee;