import { useState } from "react";
import "./14JuneTask.css";

export default function June14Task() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [userData, setUserData] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(form);

    setUserData(form);

    setForm({
      name: "",
      email: "",
      password: "",
    });
  }

  return (
    <div className="container">

      <form className="loginForm" onSubmit={handleSubmit}>
        <h2>Login Form</h2>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>
      </form>

      {userData && (
        <div className="card">
          <h3>User Details Added</h3>

          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Password:</strong> {userData.password}</p>
        </div>
      )}

    </div>
  );
}