const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
   CompanyName: {
    type: String,
    required: true
  },
  EmployeeName: {
    type: String,
    required: true
  },
  EmployeeID: {
    type: String,
    required: true
  },

  Department: {
    type: String,
    required: true
  },

  ExpensePeriod: {
    type: Date,
    required: true
  },

  Date: {
    type: Date,
    required: true
  },

  Category: {
    type: String,
    required: true
  },

  Description: {
    type: String,
    required: true
  },

  Amount: {
    type: Number,
    required: true
  },





  
}, { timestamps: true })

module.exports = mongoose.model('Workout', workoutSchema)