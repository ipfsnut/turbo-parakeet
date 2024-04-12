import React, { useState } from 'react';
import { create } from 'ipfs-http-client';
import UploadedFiles from './UploadedFiles';
import './UploadForm.css';

const ipfs = create({ url: 'http://localhost:5001' });

const UploadForm = ({ isLoggedIn, onFilesUploaded }) => {
  const [files, setFiles] = useState([]);
  const [showUploadButton, setShowUploadButton] = useState(false);

  const handleFileUpload = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    setFiles(uploadedFiles);
    setShowUploadButton(true);
  };

  const handleUploadToIPFS = async () => {
    const cids = [];

    for (const file of files) {
      try {
        const { cid } = await ipfs.add(file);
        cids.push(cid.toString());
      } catch (error) {
        console.error('Error uploading file to IPFS:', error);
      }
    }

    onFilesUploaded(cids);
  };

  return (
    <div className="upload-form-container">
      {isLoggedIn && (
        <>
          {!showUploadButton && (
            <div className="file-upload-container">
              <label htmlFor="file-upload" className="file-upload-label">
                <span className="file-upload-icon">📁</span>
                <span className="file-upload-text">Choose Files</span>
                <input
                  id="file-upload"
                  type="file"
                  multiple
                  onChange={handleFileUpload}
                  className="file-upload-input"
                />
              </label>
            </div>
          )}
          {files.length > 0 && (
            <div className="uploaded-files-container">
              <UploadedFiles files={files} />
              {showUploadButton && (
                <button onClick={handleUploadToIPFS} className="upload-button">
                  Upload to IPFS
                </button>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default UploadForm;
