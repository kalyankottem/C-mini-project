
import React, { useState } from 'react';
import './App.css';

import "./fonts/Yustika.ttf"
import "./fonts/Yustika.woff"
import "./fonts/Yustika.woff2"


import Landing from './Components/Landing/Landing';
import Navbar from './Components/Navbar/Navbar';
import Wow from './Components/Wow/Wow';
import About from './Components/About/About';
import Shop from './Components/Shop/Shop';
import Contact from './Components/Contact/Contact';

function App() {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleLogin = () => {
    if ( password === 'sharebox') {
      setIsLoggedIn(true);
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
    setPassword('');
  }

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    
    <div className="App">
      
      {!isLoggedIn ? (
                <div>
                  <h1>Welcome to sharebox</h1>
                  <div className='login-landing'>
        <div className='login-form'>
          <div className='login-field'>
              <label className='mr'>
                User ID: 
              </label>
            <input type="password"/>
          </div>
          
          <div className='login-field'>
              <label className='mr'>
                Password:
              </label>
            <input type="password" value={password} onChange={handlePasswordChange} />
          </div>
        </div>
        
        <button onClick={handleLogin}>Login</button>
      </div>
                </div>

            ) : (
            <div>
              <Navbar/>
              <Landing/>
              <Wow/>
              <About/>
              <Shop/>
              <Contact/>
            </div>
            )}
   
    </div>
  );
}

export default App;
