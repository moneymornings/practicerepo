import React, { useState } from 'react';
import '../LogIn.css';
import { FaUser, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const LogIn = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();


  const handleLogin = () => {
    setEmailError('');
    setPasswordError('');

    if (email.trim() === '') {
      setEmailError('Please enter your email');
      return;
    }

    if (password.trim() === '') {
      setPasswordError('Please enter a password');
      return;
    }
    if (password.length < 8) {
      setPasswordError('The password must be 8 characters or longer');
      return;
    }


    const myHeaders = new Headers();

const requestOptions = {
  method: "GET",
  headers: myHeaders,
};
  
fetch(`http://localhost:3003/users/${email}`, requestOptions)
  

    navigate('/home');
  };

  return (
    <div className="loginBody">
      <form className="wrapper" action="">
        <h1>Login</h1>
        <div className="input-box">
          <input
            value={email}
            placeholder="Enter your email here"
            onChange={(ev) => setEmail(ev.target.value)}
            className="inputBox"
          />
          <FaUser className="icon" />
          <label className="errorLabel">{emailError}</label>
        </div>
        <div className="input-box">
          <input
            value={password}
            type="password"
            placeholder="Enter your password here"
            onChange={(ev) => setPassword(ev.target.value)}
            className="inputBox"
          />
          <FaLock className="icon" />
          <label className="errorLabel">{passwordError}</label>
        </div>

          <button type="button" onClick={handleLogin}>
            Login
          </button>

        <div className="register-link">
          <p>
            Don't have an account? <a href="/" onClick={(ev) => { ev.preventDefault(); navigate('/'); }}>Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
