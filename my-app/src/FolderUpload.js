import React from 'react';

const FolderUpload = () => {
  const handleUpload = (event) => {
    // Handle folder upload logic here
    console.log('Uploading folder:', event.target.files[0]);
  };

  return (
    <div>
      <h2>Upload Folder</h2>
      <input type="file" webkitdirectory="true" directory="" onChange={handleUpload} />
    </div>
  );
};

export default FolderUpload;
