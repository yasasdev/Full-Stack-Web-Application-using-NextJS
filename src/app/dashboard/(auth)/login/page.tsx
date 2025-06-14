"use client";

import React from "react";
import styles from "./page.module.css";
import { signIn } from "next-auth/react";

const Login = () => {
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", { email, password });
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          className={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className={styles.input}
          required
        />
        <button className={styles.button}>Login</button>
      </form>
      <button onClick={() => signIn("google")}>Login with Google</button>
    </div>
  );
};

export default Login;
