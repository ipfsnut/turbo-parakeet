import React, { useState } from 'react';
import axios from 'axios';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

const SmartClickModal = ({ uploadedFiles }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiResults, setApiResults] = useState([]);

  const handleSmartClickAnalysis = async () => {
    setIsLoading(true);
    setApiResults([]);

    try {
      const results = await Promise.all(
        uploadedFiles.map(async (file) => {
          const formData = new FormData();
          formData.append('image', file);

          const response = await axios.post(
            'https://api.smartclick.ai/emotion-recognition',
            formData,
            {
              headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Bearer YOUR_API_KEY_HERE',
              },
            }
          );

          return {
            fileName: file.name,
            thumbnail: URL.createObjectURL(file),
            apiResult: response.data,
          };
        })
      );

      setApiResults(results);
    } catch (error) {
      console.error('Error analyzing images:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownloadResults = () => {
    const zip = new JSZip();
    const csvData = apiResults.map(
      (result) => `${result.fileName},${result.thumbnail},${JSON.stringify(result.apiResult)}`
    ).join('\n');

    zip.file('results.csv', csvData);
    zip.generateAsync({ type: 'blob' }).then((content) => {
      saveAs(content, 'results.zip');
    });
  };

  return (
    <div>
      <h2>SmartClick Analysis</h2>
      <button onClick={handleSmartClickAnalysis} disabled={isLoading}>
        {isLoading ? 'Analyzing...' : 'Analyze with SmartClick'}
      </button>
      {apiResults.length > 0 && (
        <div>
          <h3>Results:</h3>
          <ul>
            {apiResults.map((result, index) => (
              <li key={index}>
                <p>{result.fileName}</p>
                <img src={result.thumbnail} alt={result.fileName} style={{ maxWidth: '100px', maxHeight: '100px' }} />
                <pre>{JSON.stringify(result.apiResult, null, 2)}</pre>
              </li>
            ))}
          </ul>
          <button onClick={handleDownloadResults}>Download Results</button>
        </div>
      )}
    </div>
  );
};

export default SmartClickModal;
