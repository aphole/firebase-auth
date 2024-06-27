import React, { useState } from "react";
import { auth, db } from "../firebaseConfig"; // Update path as per your project structure
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import styles from "./Register.module.css";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Store additional user data in Firestore
      await setDoc(doc(db, "users", user.uid), {
        firstName: firstName,
        lastName: lastName,
        email: email,
        uid: user.uid,
      });

      alert("Registered successfully");
    } catch (error) {
      alert("Failed to register: " + error.message);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <h2>Register</h2>

          <label className={styles.label}>First Name</label>
          <input
            className={styles.input}
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <label className={styles.label}>Last Name</label>
          <input
            className={styles.input}
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <label className={styles.label}>Email</label>
          <input
            className={styles.input}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className={styles.label}>Password</label>
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className={styles.button}>
            Register
          </button>
          <p>
          Already have an account? <a href="/login">Login</a>
        </p>
        </form>
      </div>
    </>
  );
};

export default Register;
