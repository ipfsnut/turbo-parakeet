import React, { useState } from 'react';
import './App.css';
import UploadModal from './UploadModal';
import CIDModal from './CIDModal';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [uploadedCIDs, setUploadedCIDs] = useState([]); // Define uploadedCIDs state

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

  return (
    <div className="App">
      <header className="App-header">
        <div className="main-display">
          <h2 className="brand-name">Turbo-Parakeet</h2>
        </div>
        <h1>Welcome to Turbo-Parakeet</h1>
        <p>An AI user interface for the CAZ Lab of Texas Tech University</p>
      </header>

      <main>
        {!loggedIn && (
          <div>
            <p>Please log in to access the application.</p>
            <button onClick={handleLogin}>Log In</button>
          </div>
        )}

        {loggedIn && (
          <>
            <section>
              <h2>Turbo-Parakeet Upload</h2>
              {uploadedCIDs.length > 0 && <CIDModal uploadedCIDs={uploadedCIDs} />}
              <UploadModal setUploadedCIDs={setUploadedCIDs} /> {/* Pass setUploadedCIDs prop */}
              <CIDModal uploadedCIDs={uploadedCIDs} />
            </section>

            <section>
              <h2>Emotion Detection</h2>
              {/* EmotionDetectionModal component will go here */}
            </section>
          </>
        )}
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} CAZ Lab</p>
      </footer>
    </div>
  );
}

export default App;
