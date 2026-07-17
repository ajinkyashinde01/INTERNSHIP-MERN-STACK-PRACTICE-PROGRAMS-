import { useState } from "react";

export default function Form() {
  let [user, setUser] = useState("");

  function handleChange(e) {
    setUser(e.target.value);
  }

  function getSubmit(e) {
    e.preventDefault();
    alert("Hello " + user);
  }

  return (
    <>
      <h1> Login Form </h1>

      <form onSubmit={getSubmit}>
        <input
          type="text"
          placeholder="Enter your name..."
          onChange={handleChange}
        />

        <br></br>

        <input
          type="password"
          placeholder="Enter your password"
        />

        <br></br>

        <button type="submit">LOGIN</button>

        <h1>{user}</h1>
      </form>
    </>
  );
} 