import React from 'react';

const UploadedFiles = ({ files }) => {
  return (
    <div>
      <h2>Uploaded Files</h2>
      {files.map((file, index) => (
        <div key={index}>
          <img
            src={URL.createObjectURL(file)}
            alt={file.name}
            style={{ maxWidth: '100px', maxHeight: '100px' }}
          />
          <span>{file.name}</span>
        </div>
      ))}
    </div>
  );
};

export default UploadedFiles;
