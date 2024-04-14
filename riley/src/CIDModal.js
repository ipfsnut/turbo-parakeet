// CIDModal.js
import React from 'react';

const CIDModal = ({ uploadedCIDs }) => {
  return (
    <div>
      <h2>Uploaded CIDs</h2>
      {uploadedCIDs.length > 0 ? (
        <ul>
          {uploadedCIDs.map((cid, index) => (
            <li key={index}>
              <a href={cid.cid} target="_blank" rel="noopener noreferrer">
                {cid.name}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No CIDs uploaded yet.</p>
      )}
    </div>
  );
};

export default CIDModal;
