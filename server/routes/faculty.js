const express = require("express");
const router = express.Router();
const Faculty = require("../models/Faculty");

// ➕ Add Faculty
router.post("/", async (req, res) => {
  try {
    const faculty = new Faculty(req.body);
    const savedFaculty = await faculty.save();
    res.json(savedFaculty);
  } catch (err) {
    console.error("Error saving faculty:", err);
    res.status(500).json({ error: err.message });
  }
});

// 📋 Get all faculty
router.get("/", async (req, res) => {
  try {
    const faculties = await Faculty.find();
    res.json(faculties);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 📋 Get faculty by ID
router.get("/:id", async (req, res) => {
  try {
    const faculty = await Faculty.findById(req.params.id);
    res.json(faculty);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✏ Update faculty
router.put("/:id", async (req, res) => {
  try {
    const updatedFaculty = await Faculty.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedFaculty);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ❌ Delete faculty
router.delete("/:id", async (req, res) => {
  try {
    await Faculty.findByIdAndDelete(req.params.id);
    res.json({ message: "Faculty deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
