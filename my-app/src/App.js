import React, { useState, useEffect } from 'react';
import Button from './Button';
import UploadForm from './UploadForm';
import EmotionDetectionModal from './EmotionDetectionModal';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  useEffect(() => {
    console.log('App component rendered');
  }, []);

  const handleLogin = () => {
    const username = prompt('Enter your username:');
    const password = prompt('Enter your password:');

    if (username === 'admin' && password === 'hardpassword') {
      setLoggedIn(true);
      alert('Login successful!');
    } else {
      alert('Invalid username or password.');
    }
  };

  const handleFilesUploaded = (files) => {
    console.log('Files uploaded:', files);
    setUploadedFiles(files);
  };

  console.log('Rendering App component');
  console.log('loggedIn:', loggedIn);
  console.log('uploadedFiles:', uploadedFiles);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Turbo-Parakeet, an AI user interface for the CAZ Lab of Texas Tech University.</h1>
        <p>Login to display upload link.</p>
        {!loggedIn && <Button onClick={handleLogin} />}
        {loggedIn && (
          <>
            <UploadForm isLoggedIn={loggedIn} onFilesUploaded={handleFilesUploaded} />
            <EmotionDetectionModal uploadedFiles={uploadedFiles} />
          </>
        )}
        {/* ... (rest of the code) */}
      </header>
    </div>
  );
}

export default App;
