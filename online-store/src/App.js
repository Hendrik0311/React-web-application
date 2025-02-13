import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./CartContext";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import RegisterForm, { UserContext } from "./components/RegistrationForm";
import HomePage from "./components/LandingPage";
import ProductsPage from "./components/ProductPage";
import CartPage from "./components/CartPage";
import "./App.css";

function App() {
  const [username, setLoggedInUser] = useState(null);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ username, setLoggedInUser }}>
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Products" element={<ProductsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
          </Routes>
        </CartProvider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

export default App;
