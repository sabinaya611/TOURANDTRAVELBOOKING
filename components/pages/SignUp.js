import React from 'react';
import Login from './Login'; // Import the Login component
import Footer from './Footer';
export default function SignUp() {
  return (
    <div>
      <h1 className="sign-up">Login</h1>
      <Login /> {/* Render the Login component */}
      <Footer/>
    </div>
  );
}
