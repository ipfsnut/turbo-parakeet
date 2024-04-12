const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(fileUpload());

// Route to upload files to the server
app.post('/upload-files', (req, res) => {
  try {
    if (!req.files) {
      return res.status(400).send('No files were uploaded');
    }

    const uploadDir = path.join(__dirname, 'uploads');
    fs.mkdirSync(uploadDir, { recursive: true });

    const files = req.files.files;
    const fileNames = Array.isArray(files) ? files.map((file) => file.name) : [files.name];

    for (const file of fileNames) {
      const filePath = path.join(uploadDir, file);
      req.files.files.mv(filePath);
    }

    res.send('Files uploaded successfully!');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error uploading files');
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
