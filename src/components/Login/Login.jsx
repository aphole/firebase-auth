import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Logged in successfully");
      navigate("/home"); // Redirect to home page
    } catch (error) {
      alert("Failed to log in: " + error.message);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>

        <label className={styles.label}>Email</label>
        <input className={styles.input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className={styles.label}>Password</label>
        <input className={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Link to="/forgot-password" className={styles.fpass}>Forgot Password?</Link>

        <button type="submit" className={styles.button}>Login</button>

        <p>
          Don't have an account? <a href="/register">Sign Up</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
