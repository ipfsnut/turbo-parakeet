import React, { useState } from 'react';
import { create } from 'ipfs-http-client';
import UploadedFiles from './UploadedFiles';
import './UploadForm.css';

// Replace with the appropriate URL and credentials for your IPFS node or service
const ipfs = create({ url: 'http://vbf29om355d5h6e29bn3n2vvoc.ingress.akash-palmito.org:32615/api/v0' });

const UploadForm = ({ isLoggedIn, onFilesUploaded }) => {
  const [files, setFiles] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileUpload = async (event) => {
    const selectedFiles = event.target.files;
    const fileObjects = Array.from(selectedFiles);

    try {
      const results = await Promise.all(
        fileObjects.map((fileObject) => ipfs.add(fileObject))
      );

      const cids = results.map((result) => result.cid.toString());
      const uploadedFilesWithCIDs = selectedFiles.map((file, index) => ({
        file,
        cid: cids[index],
      }));

      setFiles(selectedFiles);
      setUploadedFiles(uploadedFilesWithCIDs);
      onFilesUploaded(uploadedFilesWithCIDs);
    } catch (error) {
      console.error('Error uploading files to IPFS:', error);
    }
  };

  return (
    <div className="upload-form-container">
      {isLoggedIn && (
        <>
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
          {files.length > 0 && (
            <div className="uploaded-files-container">
              <UploadedFiles files={files} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default UploadForm;
