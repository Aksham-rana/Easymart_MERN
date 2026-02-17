import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { removeCurrentSession } from "../../utils/localStorage";
import "../../Style/Navigation.css";
import logo from '../../images/logo/logo.jpg'

const Navigation = () => {
  const navigate = useNavigate();

  function logoutHandler() {
    removeCurrentSession();
    navigate("/");
  }

  return (
    <header className="nav-wrapper">
      <nav className="nav-bar">
        <div onClick={()=>{navigate('/home')}} className="nav-brand">
          <img src={logo} alt="logo" className="nav-logo" />
          <h3 className="nav-brand-name">EasyMart</h3>
        </div>
        <div className="nav-links">
          <NavLink className="nav-link" to="/home">Home</NavLink>
          <NavLink className="nav-link" to="/about">About</NavLink>
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
          <NavLink className="nav-link" to="/cart">Cart</NavLink>
        </div>

        <button className="nav-logout-btn" onClick={logoutHandler}>
          Logout
        </button>
      </nav>
    </header>
  );
};

export default Navigation;
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { removeCurrentSession } from "../../utils/localStorage";
import "../../Style/Navigation.css";
import logo from '../../images/logo/logo.jpg'

const Navigation = () => {
  const navigate = useNavigate();

  function logoutHandler() {
    removeCurrentSession();
    navigate("/");
  }

  return (
    <header className="nav-wrapper">
      <nav className="nav-bar">
        <div onClick={()=>{navigate('/home')}} className="nav-brand">
          <img src={logo} alt="logo" className="nav-logo" />
          <h3 className="nav-brand-name">EasyMart</h3>
        </div>
        <div className="nav-links">
          <NavLink className="nav-link" to="/home">Home</NavLink>
          <NavLink className="nav-link" to="/about">About</NavLink>
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
          <NavLink className="nav-link" to="/cart">Cart</NavLink>
        </div>

        <button className="nav-logout-btn" onClick={logoutHandler}>
          Logout
        </button>
      </nav>
    </header>
  );
};

export default Navigation;

