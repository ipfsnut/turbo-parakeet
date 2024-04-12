import './App.css';
import Button from './Button';
import React, { useState } from 'react';
import FolderUpload from './FolderUpload';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);

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
        <h1>
          Welcome to Turbo-Parakeet, an AI user interface for the CAZ Lab of Texas Tech University.
        </h1>

        <p>
          Login to display upload link.
        </p>
        <Button onClick={handleLogin} />
        {loggedIn && <FolderUpload />}
        <div>
          <h2>
            <img
              src={`${process.env.PUBLIC_URL}/CAZLabLogo.png`}
              alt="CAZ Lab Logo"
              className="resized-image"
            />
            <a href="https://www.depts.ttu.edu/psy/marshall-lab/#:~:text=Cognitive%20AnthroZoology%20Lab&text=Philip%20Marshall%2C%20research%20in%20the,breeds%20of%20dogs%20are%20studied."
              target="_blank"
              rel="noopener noreferrer">
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

      </header>
    </div>
  );
}

export default App;




