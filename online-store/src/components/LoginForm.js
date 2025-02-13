import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../components/RegistrationForm";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setLoggedInUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted - Username:", username, "Password:", password);
    setLoggedInUser(username); // Update the username state
    navigate("/Products");
  };

  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
