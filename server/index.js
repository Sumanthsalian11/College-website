const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// ===== MongoDB Connection =====
// Local Compass URI
const localMongoURI = "mongodb://127.0.0.1:27017/database";

// MongoDB Atlas URI (Cloud)
const atlasMongoURI = "";

// Choose one: local or atlas
const mongoURI = atlasMongoURI; // 🔹 Change to atlasMongoURI if you want to connect to Atlas

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`✅ MongoDB connected to: ${mongoURI}`))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// ===== Alumni Schema & Routes =====
const alumniSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  batch: String,
});

const Alumni = mongoose.model('Alumni', alumniSchema);

// Alumni Routes
app.get('/', (req, res) => {
  res.send('🎓 Welcome to the College Backend with Alumni + Faculty + Departments + Library');
});

app.post('/register', async (req, res) => {
  console.log('📩 Received data:', req.body);

  try {
    const alumni = new Alumni(req.body);
    await alumni.save();
    console.log('✅ Alumni saved successfully');
    res.status(201).json({ message: 'Registration successful' });
  } catch (err) {
    console.error('❌ Error during registration:', err.message);
    res.status(500).json({ message: 'Error during registration', error: err.message });
  }
});

app.get('/api/alumni', async (req, res) => {
  try {
    const alumniList = await Alumni.find();
    res.json(alumniList);
  } catch (err) {
    console.error("❌ Error fetching alumni list:", err.message);
    res.status(500).json({ message: 'Error fetching alumni list', error: err.message });
  }
});

// ===== Faculty / Department / User / Library Routes =====
const facultyRoutes = require('./routes/faculty');
const departmentRoutes = require('./routes/department');
const userRoutes = require('./routes/user');

app.use('/api/faculty', facultyRoutes);
app.use('/api/department', departmentRoutes);
app.use('/api/users', userRoutes);


// ===== Start Server =====
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
;