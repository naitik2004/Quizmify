import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  loginUser,
  loginWithGoogle,
  registerUser,
  logoutUser,
} from '../firebase/authservices';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await loginUser(email, password);
      setUser(userCredential.user);
      setError('');
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await registerUser(email, password, username);
      setUser(userCredential.user);
      setError('');
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const user = await loginWithGoogle();
      setUser(user);
      setError('');
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleLogout = async () => {
    try {
      await logoutUser();
      setUser(null);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      {user ? (
        <div className="welcome-box">
          <h2 className="welcome-message">
            Welcome, {user.displayName || user.email}
          </h2>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <div className="form-box">
          <h2 className="form-title">{isLogin ? 'Login' : 'Register'}</h2>
          {error && <p className="error-text">{error}</p>}

          {isLogin ? (
            <form className="form" onSubmit={handleLogin}>
              <input
                className="input"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                className="input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button className="submit-button" type="submit">
                Login
              </button>
            </form>
          ) : (
            <form className="form" onSubmit={handleRegister}>
              <input
                className="input"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                className="input"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                className="input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button className="submit-button" type="submit">
                Register
              </button>
            </form>
          )}

          <button className="google-button" onClick={handleGoogleLogin}>
            Login with Google
          </button>

          <button
            className="toggle-button"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin
              ? "Don't have an account? Register"
              : 'Already have an account? Login'}
          </button>
        </div>
      )}
    </div>
  );
};

export default LoginPage;

