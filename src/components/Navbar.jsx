import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white border-bottom fixed-top">
        <div className="container-fluid px-4">

          {/* Brand */}
          <Link className="navbar-brand fw-bold fs-4" to="/">
            LIFESTYLE
          </Link>

          {/* Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-between" id="navbarContent">

            {/* Center Menu */}
            <ul className="navbar-nav mx-auto gap-4">
              <li className="nav-item">
                <Link className="nav-link text-secondary fw-medium" to="/shop">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-secondary fw-medium" to="/collections">
                  Collections
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-secondary fw-medium" to="/sustainability">
                  Sustainability
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-secondary fw-medium" to="/journal">
                  Journal
                </Link>
              </li>
            </ul>

            {/* Right Section */}
            <div className="d-flex align-items-center gap-3">
              {/* <button className="btn btn-outline-dark btn-sm px-3">
                Sign In
              </button> */}
              <Link to="/login" className="btn btn-outline-dark btn-sm px-3">Sign In</Link>

              <button className="btn btn-outline-dark btn-sm">
                <i className="bi bi-cart"></i>
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div style={{ height: "75px" }}></div>
    </div>
  );
}