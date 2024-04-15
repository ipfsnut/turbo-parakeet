import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import UploadModal from './UploadModal';
import EmotionDetectionModal from './EmotionDetectionModal';
import SmartClickModal from './SmartClickModal';
import axios from 'axios';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  useEffect(() => {
    const fetchUploadedFiles = async () => {
      try {
        const response = await axios.get('/files');
        setUploadedFiles(response.data);
      } catch (err) {
        console.error('Error fetching uploaded files:', err);
      }
    };

    fetchUploadedFiles();
  }, []);

  const handleFileClick = (file) => {
    setSelectedFile(file);
  };

  return (
    <HashRouter>
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
            <Routes>
              <Route
                path="/"
                element={
                  <section>
                    <h2>Turbo-Parakeet Upload</h2>
                    <UploadModal />
                    {uploadedFiles.length > 0 && (
                      <div>
                        <h3>Uploaded Files:</h3>
                        <ul>
                          {uploadedFiles.map((file, index) => (
                            <li key={index} onClick={() => handleFileClick(file)}>
                              {file.name}
                              {file.type.startsWith('image/') && (
                                <img
                                  src={`/uploads/${file.path}`}
                                  alt={file.name}
                                  style={{ maxWidth: '100px', maxHeight: '100px' }}
                                />
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {selectedFile && (
                      <>
                        <EmotionDetectionModal file={selectedFile} />
                        <SmartClickModal uploadedFiles={uploadedFiles} />
                      </>
                    )}
                  </section>
                }
              />
            </Routes>
          )}
        </main>

        <footer>
          <p>&copy; {new Date().getFullYear()} CAZ Lab</p>
        </footer>
      </div>
    </HashRouter>
  );
}

export default App;
