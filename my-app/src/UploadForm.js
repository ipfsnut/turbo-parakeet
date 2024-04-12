/**
 * React component that provides a file upload functionality to the user.
 * 
 * The `UploadForm` component allows the user to select one or more files to be uploaded to IPFS using the NFT.Storage service. The selected files are displayed in the `UploadedFiles` component, and the user can then click the "Upload to IPFS" button to initiate the upload process.
 * 
 * The component uses the `NFTStorage` library to interact with the NFT.Storage service and upload the files. The `NFT_STORAGE_API_KEY` is loaded from the environment using the `dotenv` library.
 * 
 * @param {object} props - The component props.
 * @param {boolean} props.isLoggedIn - Indicates whether the user is logged in.
 * @param {function} props.onFilesUploaded - Callback function to be called when the files have been uploaded successfully.
 * @returns {JSX.Element} The `UploadForm` component.
 */
import React, { useState } from 'react';
import { NFTStorage } from 'nft.storage';
import UploadedFiles from './UploadedFiles';
import './UploadForm.css';
import dotenv from 'react-dotenv';

dotenv.config();

const NFT_STORAGE_API_KEY = dotenv.NFT_STORAGE_API_KEY;
const nftStorage = new NFTStorage({ token: NFT_STORAGE_API_KEY });

const UploadForm = ({ isLoggedIn, onFilesUploaded }) => {
  const [files, setFiles] = useState([]);
  const [showUploadButton, setShowUploadButton] = useState(false);

  const handleFileUpload = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    setFiles(uploadedFiles);
    setShowUploadButton(true);
  };

  const handleUploadToIPFS = async () => {
    try {
      const cids = await nftStorage.storeBlob(files);
      onFilesUploaded(cids);
    } catch (error) {
      console.error('Error uploading files to IPFS:', error);
    }
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
