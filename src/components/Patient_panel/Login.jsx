// src/components/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Login.css'; // Ensure this CSS file exists

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Optional: Axios default base URL (e.g., http://localhost:8080/api)
  // axios.defaults.baseURL = 'http://localhost:8080/api';

  const validateForm = () => {
    if (!email || !password) return 'Email and password are required';
    const emailPattern = /^\S+@\S+\.\S+$/;
    if (!emailPattern.test(email)) return 'Invalid email format';
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorMessage = validateForm();
    if (errorMessage) {
      setError(errorMessage);
      return;
    }

    try {
      const response = await axios.post('/api/login', { email, password });

      // Assuming the backend returns a JWT token
      const { token } = response.data;

      // Store token
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      // Redirect to profile
      navigate('/profile');
    } catch (err) {
      const errorMsg = err.response?.data?.message || 'Login failed. Please try again.';
      setError(errorMsg);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>MediTrack Login</h2>
        <form onSubmit={handleSubmit}>
          {error && <p className="error">{error}</p>}

          <label>Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
          <p className="forgot">
            <a href="/forgot">Forgot password?</a>
          </p>
        </form>
      </div>
    </div>
  );
}
