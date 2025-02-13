import React, { useContext, useState } from "react";
import CartContext from "../CartContext";

const CartPage = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    shippingMethod,
    setShippingMethod,
  } = useContext(CartContext);

  // Render help request form
  const [showHelp, setShowHelp] = useState(false);

  // Calculate total cost and total items in cart
  const totalCost =
    cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    ) + shippingMethod.cost;
  const totalItems = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  // Handle shipping method change
  const handleShippingChange = (event) => {
    const selectedMethod = event.target.value;
    switch (selectedMethod) {
      case "standard":
        setShippingMethod({ name: "Standard Shipping", cost: 5.0 });
        break;
      case "express":
        setShippingMethod({ name: "Express Shipping", cost: 15.0 });
        break;
      case "overnight":
        setShippingMethod({ name: "Overnight Shipping", cost: 25.0 });
        break;
      default:
        setShippingMethod({ name: "Standard Shipping", cost: 5.0 });
    }
  };

  // Render cart items
  const cartItems = cart.map((product) => (
    <div key={product.id} className="cart-item">
      <p>
        {product.name} - R{product.price.toFixed(2)} x {product.quantity}
      </p>
      <button onClick={() => removeFromCart(product.id)}>Remove</button>
      <button onClick={() => updateQuantity(product.id, product.quantity + 1)}>
        +
      </button>
      <button onClick={() => updateQuantity(product.id, product.quantity - 1)}>
        -
      </button>
    </div>
  ));

  // Render shipping method selection
  const shippingOptions = (
    <div className="shipping-method">
      <label htmlFor="shipping">Choose a shipping method:</label>
      <select id="shipping" name="shipping" onChange={handleShippingChange}>
        <option value="standard">Standard Shipping - R5.00</option>
        <option value="express">Express Shipping - R15.00</option>
        <option value="overnight">Overnight Shipping - R25.00</option>
      </select>
    </div>
  );

  const handleHelpClick = () => {
    setShowHelp(true);
  };

  const handleHelpClose = () => {
    setShowHelp(false);
  };

  const helpForm = (
    <div className="help-popup">
      <h2>Shipping Help</h2>
      <p>Here's some helpful information about shipping:</p>
      <ul>
        <li>Standard Shipping: 3-5 business days</li>
        <li>Express Shipping: 1-2 business days</li>
        <li>Overnight Shipping: 1 business day</li>
      </ul>
      <button onClick={handleHelpClose}>Close</button>
    </div>
  );

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems}
      {shippingOptions}
      <p>Total Items: {totalItems}</p>
      <p>Total Cost: R{totalCost.toFixed(2)}</p>
      <button onClick={clearCart}>Clear Cart</button>
      <hr />
      <button onClick={handleHelpClick}>Get Help</button>
      {showHelp && helpForm}
    </div>
  );
};

export default CartPage;
