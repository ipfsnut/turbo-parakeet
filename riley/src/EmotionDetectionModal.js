import React, { useState } from 'react';
import * as faceapi from 'face-api.js';

const EmotionDetectionModal = ({ file }) => {
  const [emotionResults, setEmotionResults] = useState(null);

  const detectEmotions = async () => {
    try {
      // Load the face detection and emotion recognition models
      await faceapi.loadSsdMobilenetv1Model('/models');
      await faceapi.loadFaceLandmarkModel('/models');
      await faceapi.loadFaceExpressionModel('/models');

      // Create a new image element from the file
      const img = await faceapi.bufferToImage(file);

      // Detect faces and expressions
      const detections = await faceapi
        .detectAllFaces(img, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceExpressions();

      // Extract emotion results
      const results = detections.map((detection) => ({
        emotions: detection.expressions,
        box: detection.box,
      }));

      setEmotionResults(results);
    } catch (error) {
      console.error('Error detecting emotions:', error);
    }
  };

  return (
    <div>
      <h2>Emotion Detection</h2>
      <button onClick={detectEmotions}>Detect Emotions</button>
      {emotionResults && (
        <div>
          <h3>Results:</h3>
          <ul>
            {emotionResults.map((result, index) => (
              <li key={index}>
                <p>Face {index + 1}:</p>
                <ul>
                  {Object.entries(result.emotions).map(([emotion, value]) => (
                    <li key={emotion}>
                      {emotion}: {(value * 100).toFixed(2)}%
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default EmotionDetectionModal;
