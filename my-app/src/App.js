import React, { useState, useEffect } from 'react';
import Button from './Button';
import UploadForm from './UploadForm';
import EmotionDetectionModal from './EmotionDetectionModal';
import './App.css';
import CAZLabLogo from './assets/CAZLabLogo.png';
import logo192 from './assets/logo192.png';
import logo512 from './assets/logo512.png';

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
        <div className="logo-container">
          <img src={CAZLabLogo} alt="CAZ Lab Logo" className="caz-lab-logo" />
          <img src={logo192} alt="Logo 192" className="logo-192" />
          <img src={logo512} alt="Logo 512" className="logo-512" />
        </div>
        <h1>Welcome to Turbo-Parakeet</h1>
        <p>An AI user interface for the CAZ Lab of Texas Tech University</p>
        {!loggedIn && (
          <>
            <p>Please log in to access the application.</p>
            <Button onClick={handleLogin} />
          </>
        )}
        {loggedIn && (
          <>
            <UploadForm isLoggedIn={loggedIn} onFilesUploaded={handleFilesUploaded} />
            <EmotionDetectionModal uploadedFiles={uploadedFiles} />
          </>
        )}
      </header>
    </div>
  );
}

export default App;
