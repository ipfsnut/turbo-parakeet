import React, { useState } from 'react';
import Dropzone from 'react-dropzone';

function App() {
  const [files, setFiles] = useState([]);

  const handleFileDrop = async (acceptedFiles) => {
    try {
      const formData = new FormData();
      acceptedFiles.forEach((file) => {
        formData.append('file', file);
      });

      const response = await fetch('/.netlify/functions/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Files uploaded successfully');
        setFiles(acceptedFiles);
      } else {
        console.error('Error uploading files');
      }
    } catch (error) {
      console.error('Error uploading files:', error);
    }
  };

  return (
    <div>
      <header>
        <h1>Turbo-Parakeet</h1>
      </header>

      <main>
        <Dropzone onDrop={handleFileDrop}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()} className="dropzone">
              <input {...getInputProps()} />
              <p>Drag and drop files here, or click to select files</p>
            </div>
          )}
        </Dropzone>

        <div>
          <h2>Uploaded Files</h2>
          <ul>
            {files.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      </main>

      <footer>
        <p>&copy; Texas Tech University Cognitive Anthrozoology Laboratory</p>
      </footer>
    </div>
  );
}

export default App;
