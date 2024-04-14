import React, { useState, useRef } from 'react';
import { NFTStorage } from 'nft.storage';

const UploadModal = ({ setUploadedCIDs }) => {

    // Get the NFT.Storage API key from the environment variables
    const apiKey = process.env.NFT_STORAGE_API_KEY;

    // Create an instance of NFTStorage with the API key
    const nftstorage = new NFTStorage({ token: apiKey });

    const [folderPath, setFolderPath] = useState('');
    const fileInputRef = useRef(null);

    const handleFolderUpload = async (event) => {
        try {
            const folderFiles = event.target.files;
            // Check if any files were selected
            if (folderFiles.length === 0) {
                console.error('No files were selected for upload.');
                return;
            }

            // Upload the folder to NFT.Storage and get the CID
            const folderCID = await nftstorage.storeDirectory(folderFiles);

            // Get the contents of the uploaded folder
            const folderContents = await nftstorage.list(folderCID);

            // Check if the folder contents were retrieved successfully
            if (folderContents.length === 0) {
                console.error('Failed to retrieve folder contents after upload.');
                return;
            }

            // Map the folder contents to an array of objects with name and CID
            const cids = folderContents.map((file) => ({
                name: file.name,
                cid: `https://nftstorage.link/ipfs/${file.cid}`,
            }));

            // Update the parent component with the uploaded CIDs
            setUploadedCIDs(cids);
            // Update the local state with the folder CID
            setFolderPath(folderCID);
        } catch (error) {
            console.error('Error uploading folder:', error);
        }
    };

    const handleFileInputClick = () => {
        // When the button is clicked, trigger the file input
        fileInputRef.current.click();
    };

    return (
        <div>
            <h2>Upload Folder</h2>
            <button onClick={handleFileInputClick}>Select Folder</button>
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFolderUpload}
                webkitdirectory="true"
                directory=""
                style={{ display: 'none' }}
            />
            {folderPath && <p>Folder CID: {folderPath}</p>}
        </div>
    );
};

export default UploadModal;
