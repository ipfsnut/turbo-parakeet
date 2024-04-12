import React, { useState } from 'react';

const EmotionDetectionModal = ({ uploadedFiles }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [emotionDetectionResults, setEmotionDetectionResults] = useState([]);

    const handleRunEmotionDetection = async () => {
        try {
            console.log('uploadedFiles:', uploadedFiles); // Log the uploadedFiles prop

            const updatedFiles = await Promise.all(
                uploadedFiles.map(async (uploadedFile) => {
                    console.log('Processing file:', uploadedFile.file.name); // Log the file being processed

                    const response = await fetch(`https://api.smartclick.ai/emotion-detection?url=https://ipfs.io/ipfs/${uploadedFile.cid}`);
                    console.log('API response status:', response.status); // Log the API response status

                    const data = await response.text();
                    console.log('API response data:', data); // Log the raw API response data

                    return {
                        ...uploadedFile,
                        emotionDetectionResult: data,
                    };
                })
            );

            console.log('updatedFiles:', updatedFiles); // Log the updatedFiles array

            setEmotionDetectionResults(updatedFiles);
            setIsModalOpen(true);
        } catch (error) {
            console.error('Error running emotion detection:', error);
        }
    };

    return (
        <div>
            <button onClick={handleRunEmotionDetection}>Run Emotion Detection</button>
            {isModalOpen && (
                <div>
                    <h2>Emotion Detection Results</h2>
                    {emotionDetectionResults.map((result, index) => (
                        <div key={index}>
                            <p>File: {result.file.name}</p>
                            <pre>{result.emotionDetectionResult}</pre>
                        </div>
                    ))}
                    <button onClick={() => setIsModalOpen(false)}>Close</button>
                </div>
            )}
        </div>
    );
};

export default EmotionDetectionModal;
