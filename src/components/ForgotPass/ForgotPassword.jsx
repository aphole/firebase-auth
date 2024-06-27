import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import styles from './forgotPassword.module.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = async () => {
    const auth = getAuth(); 
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Password reset email sent. Check your inbox.');
    } catch (error) {
      setMessage(`Failed to send reset email: ${error.message}`);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Forgot Password</h2>
      <input
        className={styles.input}
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleResetPassword} className={styles.button}>
        Reset Password
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ForgotPassword;
