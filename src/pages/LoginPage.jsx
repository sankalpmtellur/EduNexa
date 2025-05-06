import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
  
    const { fullName, email, password } = userData;
  
    if (fullName && email && password) {
      console.log('User Logged In:', userData);
      localStorage.setItem('fullname', fullName);
      localStorage.setItem('email', email);
  
      navigate('/home');
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={userData.fullName}
          onChange={handleChange}
          className="input-box"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={userData.email}
          onChange={handleChange}
          className="input-box"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userData.password}
          onChange={handleChange}
          className="input-box"
          required
        />
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;