const express = require('express');
const router = express.Router();
const Department = require('../models/Department');

// Add department
router.post('/', async (req, res) => {
  try {
    const newDept = new Department(req.body);
    await newDept.save();
    res.status(201).json(newDept);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save department' });
  }
});


// Get all departments
router.get('/', async (req, res) => {
  try {
    const departments = await Department.find();
    res.json(departments);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch departments' });
  }
});

module.exports = router;
