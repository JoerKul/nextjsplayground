import axios from "axios";
import { useState } from "react";

import styles from "../styles/Home.module.css";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const credentials = { username, password };

    const user = await axios.post("/api/auth/login", credentials);
    console.log("🚀 ~ file: index.tsx:16 ~ handleSubmit ~ user", user);
  };
  async function handleGetUser(): Promise<void> {
    const user = await axios.get("/api/user");
    console.log("🚀 ~ file: index.tsx:20 ~ handleGetUser ~ user", user);
  }

  async function handleLoggedOut(): Promise<void> {
    await axios.post("/api/auth/logout");
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Welcome to Next.js!</h1>
        <form
          onSubmit={(e) => handleSubmit(e)}
          method="post"
          className={styles.form}
        >
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        <button onClick={() => handleGetUser()}>Get User</button>
        <button onClick={() => handleLoggedOut()}>LogOut</button>
      </main>
    </div>
  );
}
