import { useState } from "react";
import { preinit } from "react-dom";

export default function Formhandling() {
  let [formdata, setFormdata] = useState({
    name: "",
    email: "",
    city: "",
    mobile: "",
  });

  function handleChange(e) {
    
    setFormdata((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }

  function getSubmit(e) {
    e.preventDefault();
    alert("Hello " + formdata.name);
  }

  return (
    <>
    <h1>Form Handling </h1>
      <form onSubmit={getSubmit}>
        <input
          type="text"
          placeholder="Enter your name..."
          name="name"
          onChange={handleChange}
        />

        <br></br>

        <input
          type="email"
          placeholder="Enter your email..."
          name="email"
          onChange={handleChange}
        />

        <br></br>

        <input
          type="text"
          placeholder="Enter your city..."
          name="city"
          onChange={handleChange}
        />

        <br></br>

        <input
          type="text"
          placeholder="Enter your mobile..."
          name="mobile"
          onChange={handleChange}
        />

        <br></br>

        <button type="submit">LOGIN</button>

        <h1>{formdata.name}</h1>
      </form>
    </>
  );
}