const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

// MongoDB connection
mongoose.connect('mongodb://localhost/turbo-parakeet', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// File schema
const fileSchema = new mongoose.Schema({
  name: String,
  path: String,
});

const File = mongoose.model('File', fileSchema);

// File upload route
app.post('/upload', upload.array('files'), async (req, res) => {
  try {
    const files = req.files.map((file) => ({
      name: file.originalname,
      path: file.path,
    }));

    await File.insertMany(files);

    res.status(200).json({ message: 'Files uploaded successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error uploading files' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
