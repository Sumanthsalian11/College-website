const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  name: String,
  description: String,
  code: String,
  contactEmail: String,
  headOfDepartment: String,
  establishedDate: Date
});

module.exports = mongoose.model('Department', departmentSchema);
