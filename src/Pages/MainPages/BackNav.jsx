import React from "react";
import { useNavigate } from "react-router-dom";
import "../../Style/BackNav.css";

const BackNav = () => {
  const navigate = useNavigate();

  return (
    <header className="backnav-wrapper">
      <div className="backnav-content">
        {/* Left: Back button */}
        <button className="backnav-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>

        {/* Right: Cart button */}
        <button
          className="cart-btn"
          onClick={() => navigate("/cart")}
        >
          🛒 Cart
        </button>
      </div>
    </header>
  );
};

export default BackNav;
