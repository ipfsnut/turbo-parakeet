import React, { useRef } from 'react';
import axios from 'axios';

const UploadModal = () => {
  const fileInputRef = useRef(null);

  const handleFileUpload = async (event) => {
    const files = event.target.files;

    if (files.length === 0) {
      console.error('No files were selected for upload.');
      return;
    }

    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i]);
    }

    try {
      await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Files uploaded successfully');
    } catch (err) {
      console.error('Error uploading files:', err);
    }
  };

  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <h2>Upload Files</h2>
      <button onClick={handleFileInputClick}>Select Files</button>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileUpload}
        multiple
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default UploadModal;
