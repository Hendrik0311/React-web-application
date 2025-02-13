import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../components/RegistrationForm";

function Header() {
  const { username } = useContext(UserContext);

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Products">Store</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            {username ? (
              <span>Welcome, {username}!</span>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
          {username ? null : (
            <li>
              <Link to="/register">Register</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
