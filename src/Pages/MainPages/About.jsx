import React from "react";
import "../../Style/About.css";
import Navigation from "./Navigation";

const About = () => {
  return (
    <>
    <Navigation/>
    <div className="about-page">
      
      <h1>About EasyMart</h1>

      <p className="about-intro">
        EasyMart is a modern e-commerce platform designed to make online
        shopping simple, fast, and enjoyable. Our focus is on providing
        a smooth user experience with clean design and easy navigation.
      </p>

      <section className="about-section">
        <h2>What EasyMart Offers</h2>
        <ul>
          <li>Browse a wide range of products</li>
          <li>View detailed product information</li>
          <li>Fast and responsive user interface</li>
          <li>Secure login and logout functionality</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Our Vision</h2>
        <p>
          Our vision is to create an intuitive shopping experience while
          applying modern frontend development practices. EasyMart is
          built with a strong focus on usability, performance, and
          scalability.
        </p>
      </section>

      <section className="about-section">
        <h2>Why EasyMart?</h2>
        <p>
          EasyMart is designed to demonstrate how a real-world e-commerce
          application works — from fetching products using APIs to
          displaying detailed product pages with smooth navigation.
        </p>
      </section>
    </div>
    </>
    
  );
};

export default About;

