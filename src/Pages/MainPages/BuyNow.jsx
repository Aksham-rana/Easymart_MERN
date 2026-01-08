import { useState } from "react";
import { useCart } from "../../Context/CartContext";
import Navigation from "./Navigation";
import "../../Style/BuyNow.css";

const BuyNow = () => {
  const { cart } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: ""
  });

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // simple validation
    if (!formData.name || !formData.address || !formData.phone) {
      alert("Please fill all details");
      return;
    }

    // success alert
    alert("✅ Order placed successfully!");

    // reset form
    setFormData({
      name: "",
      address: "",
      phone: ""
    });
  };

  return (
    <>
      <Navigation />

      <div className="buy-page">
        <div className="buy-container">
          <h2 className="buy-title">Checkout</h2>

          {/* ORDER SUMMARY */}
          <div className="buy-section">
            <h3>Order Summary</h3>

            {cart.map(item => (
              <div className="buy-item" key={item.id}>
                <p>{item.title} × {item.quantity}</p>
                <p>₹{item.price * item.quantity}</p>
              </div>
            ))}

            <div className="buy-total">
              <span>Total Amount</span>
              <span>₹{totalAmount}</span>
            </div>
          </div>

          {/* SHIPPING DETAILS */}
          <form onSubmit={handleSubmit} className="buy-section">
            <h3>Shipping Details</h3>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />

            <button type="submit" className="buy-btn">
              Place Order
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BuyNow;

