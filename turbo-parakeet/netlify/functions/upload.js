// upload.js
const formidable = require('formidable');
const fs = require('fs');

exports.handler = async (event) => {
  const form = new formidable.IncomingForm();

  return new Promise((resolve, reject) => {
    form.parse(event.body, (err, fields, files) => {
      if (err) {
        console.error('Error parsing form:', err);
        reject({ statusCode: 500, body: 'Error parsing form' });
        return;
      }

      console.log('Parsed form data:', fields, files);

      const file = files.file; // Assuming the file field is named 'file'

      if (!file) {
        reject({ statusCode: 400, body: 'No file uploaded' });
        return;
      }

      const filePath = `/tmp/${file.newFilename}`;

      fs.copyFile(file.filepath, filePath, (err) => {
        if (err) {
          console.error('Error saving file:', err);
          reject({ statusCode: 500, body: 'Error saving file' });
          return;
        }

        resolve({
          statusCode: 200,
          body: `File "${file.newFilename}" uploaded successfully`,
        });
      });
    });
  });
};
