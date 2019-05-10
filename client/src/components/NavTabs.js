import React from "react";
import { Link } from "react-router-dom";
// import "./pages/style.css"
// import Email from "../assets/img/email.png"


function NavTabs() {
  return (
    <nav className="navbar fixed-top bg-dark navbar-dark navbar-expand my-nav">
      <ul className="navbar-nav">

        {/* <li className="navbar-nav flex-row ml-md-auto d-none d-md-flex nav-item">

        </li> */}

        <li className="nav-item">
          <Link
            to="/"
            className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
          >
            About
        </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/products"
            className={window.location.pathname === "/products" ? "nav-link active" : "nav-link"}
          >
            Products
        </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/services"
            className={window.location.pathname === "/services" ? "nav-link active" : "nav-link"}
          >
            Services
        </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/subscription"
            className={window.location.pathname === "/subscription" ? "nav-link active" : "nav-link"}
          >
            Subscription
        </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/contact"
            className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
          >
            Contact
        </Link>
        </li>
        <li className="nav-item">
          <a
            href="mailto:contact@orionabrams.com"
          >
            {/* <img className="email"  alt="email" src={Email} /> */}
        </a>
        </li>
        </ul>
        <ul className="navbar-nav navbar-right ml-auto">
          <li className="nav-item">
            <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
              Alison Bodhani
        </Link>
          </li>
          </ul>
        
      
    </nav>
  );
}

export default NavTabs;
