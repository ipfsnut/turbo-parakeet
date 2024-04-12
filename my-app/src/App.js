import React, { useState } from 'react';
import Button from './Button';
import UploadForm from './UploadForm';
import UploadedFiles from './UploadedFiles';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);

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
    setUploadedFiles(files);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Turbo-Parakeet, an AI user interface for the CAZ Lab of Texas Tech University.</h1>
        <p>Login to display upload link.</p>
        {!loggedIn && <Button onClick={handleLogin} />}
        {loggedIn && <UploadForm isLoggedIn={loggedIn} onFilesUploaded={handleFilesUploaded} />}
        <div>
          <h2>
            <img
              src={`${process.env.PUBLIC_URL}/CAZLabLogo.png`}
              alt="CAZ Lab Logo"
              className="resized-image"
            />
            <a
              href="https://www.depts.ttu.edu/psy/marshall-lab/#:~:text=Cognitive%20AnthroZoology%20Lab&text=Philip%20Marshall%2C%20research%20in%20the,breeds%20of%20dogs%20are%20studied."
              target="_blank"
              rel="noopener noreferrer"
            >
              Cognitive AnthroZoology Lab
            </a>
          </h2>
        </div>
        <br />
        <a
          className="App-link"
          href="https://www.depts.ttu.edu/psy/marshall-lab/#:~:text=Cognitive%20AnthroZoology%20Lab&text=Philip%20Marshall%2C%20research%20in%20the,breeds%20of%20dogs%20are%20studied."
          target="_blank"
          rel="noopener noreferrer"
        >
          TTU CAZ Lab
        </a>
        {uploadedFiles.length > 0 && (
          <div>
            <h2>Uploaded Files</h2>
            <UploadedFiles files={uploadedFiles} />
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
