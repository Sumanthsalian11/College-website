const mongoose = require("mongoose");

// ✅ Faculty Schema (cleaned)
const FacultySchema = new mongoose.Schema({
  name: { type: String, required: true },
  department: { type: String, required: true },
  email: { type: String, required: true },
  contact: { type: String, required: true },
  qualification: { type: String }, // summary only
  joiningDate: { type: Date },
  photo: { type: String }, // base64 or file path
  resume: { type: String }, // PDF as base64 or file path
});

module.exports = mongoose.model("Faculty", FacultySchema);
