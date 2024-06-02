import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
const Login = () => {
 
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [emailForReset, setEmailForReset] = useState('');

  const handleForgotPassword = () => {
    setShowForgotPassword(true);
  };

  const handleResetSubmit = (e) => {
    e.preventDefault();
    // Implement logic here to send reset link using 'emailForReset'
    alert(`Password reset link will be sent to ${emailForReset}`);
    setEmailForReset('');
  };

  return (
    <div>
      
    <div className='login'>
       
      <span className="loginTitle" style={{ color: '#FF0000', fontSize: '55px',fontWeight:'bold',marginTop:'180px' }}>Login</span>
      <form className="loginForm">
        <div style={{ marginBottom: '10px' }}>
          <label style={{ fontSize: '25px', color: 'Black',fontWeight:'bold',marginLeft:'20px' }}>UserName</label>
          <input className="loginInput" type="username" placeholder="Enter your username..." />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ fontSize: '25px', color: 'Black',fontWeight:'bold',marginLeft:'20px' }}>Password</label>
          <input className="loginInput" type="password" placeholder="Enter your password..." />
        </div>
        <div style={{ marginBottom: '25px', marginTop: '10px',marginLeft:'30px' }}>
          <button className="loginButton">Login</button>
        </div>
        
      </form>

      <div className="forgotPasswordContainer">
        <span className="forgotPasswordText" onClick={handleForgotPassword}>
          Forgot Password?
        </span>
      </div>

      {showForgotPassword && (
        <div className="forgotPasswordForm">
          <form onSubmit={handleResetSubmit}>
            <label style={{ fontSize: '27px', color: 'white' }}>Enter your email to reset password</label>
            <input
              className="forgotPasswordInput"
              type="text"
              placeholder="Enter your email..."
              value={emailForReset}
              onChange={(e) => setEmailForReset(e.target.value)}
            />
            <button type="submit" className="forgotPasswordSubmitButton">
              Submit
            </button>
          </form>
        </div>
      )}

      <div className="link">
        <p>
          Don't have an account?{' '}
          <Link to="/register">Register here</Link>
        </p>
        <Link to="/home" className="goBackLink">
        <button className="goBackButton">
          Go back to HomePage
        </button>
      </Link>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Login;