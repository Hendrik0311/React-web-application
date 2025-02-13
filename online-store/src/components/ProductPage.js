// ProductPage.js

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../CartContext";

const ProductPage = () => {
  // Get the addToCart function from the CartContext
  const { addToCart } = useContext(CartContext);

  // Use the useNavigate hook to navigate to the cart page
  const navigate = useNavigate();

  // Define an array of products
  const products = [
    { id: 1, name: "Nike shoes", price: 400.99 },
    { id: 2, name: "Adidas cap", price: 120.99 },
    { id: 3, name: "Puma shirt", price: 30.99 },
  ];

  // Define a function to handle adding a product to the cart
  const handleAddToCart = (product) => {
    // Add the product to the cart using the addToCart function
    addToCart(product);
    // Navigate to the cart page
    navigate("/cart");
  };

  return (
    <div className="container">
      <div className="products">
        <h2>Products</h2>
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <p>
              {product.name} - R{product.price.toFixed(2)}
            </p>
            <button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
