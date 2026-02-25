import React from "react";

export function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white border-bottom fixed-top">
        <div className="container-fluid px-4">

          {/* Brand */}
          <a className="navbar-brand fw-bold fs-4" href="#">LIFESTYLE</a>

          {/* Toggle Button */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-between" id="navbarContent">

            {/* Center Menu */}
            <ul className="navbar-nav mx-auto gap-4">
              <li className="nav-item">
                <a className="nav-link text-secondary fw-medium" href="#">Shop</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary fw-medium" href="#">Collections</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary fw-medium" href="#">Sustainability</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary fw-medium" href="#">Journal</a>
              </li>
            </ul>

            {/* Right Section */}
            <div className="d-flex align-items-center gap-3">

              {/* Search */}
              <div className="input-group d-none d-lg-flex" style={{ width: "260px" }}>
                <input type="text" className="form-control" placeholder="Search products..."/>
                <button className="btn btn-secondary">
                  <i className="bi bi-search text-white"></i>
                </button>
              </div>

              {/* Sign In */}
              <button className="btn btn-outline-dark btn-sm px-3">Sign In</button>

              {/* Cart */}
              <button className="btn btn-outline-dark btn-sm position-relative">
                <i className="bi bi-cart"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div style={{ height: "75px" }}></div>
    </div>
  );
}