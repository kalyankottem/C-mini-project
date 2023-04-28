import React, { useState } from 'react';
import About from '../About/About';
import App from '../../App';
import './Assets/Login.css'
function Login() {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleLogin = () => {
    if (password === 'hi') {
      setIsLoggedIn(true);
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
    setPassword('');
  }

  const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
      <div className='login-landing'>
        <label>
            Password:
            <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <button onClick={handleLogin}>Login</button>
      </div>
    );
}

export default Login;
