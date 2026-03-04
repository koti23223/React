// footer.jsx
import React from "react";

export function Footer() {
  return (
    <footer className="bg-light py-4 mt-5">
      <div className="container">
        <div className="row">

          {/* Column 1 */}
          <div className="col-md-4">
            <h5>LIFESTYLE</h5>
            <p>Crafting quality essentials for mindful living.</p>
          </div>

          {/* Column 2 */}
          <div className="col-md-4">
            <h6>Shop</h6>
            <p>Men</p>
            <p>Women</p>
            <p>Kids</p>
            <p>Shoes</p>
            <p>Electronics</p>
            <p>Accessories</p>
          </div>

          {/* Column 3 */}
          <div className="col-md-4">
            <h6>Support</h6>
            <p>Shipping & Returns</p>
            <p>Privacy Policy</p>
            <p>FAQs</p>
          </div>

        </div>

        <div className="text-center mt-3">
          <small>© 2026 Lifestyle Brand. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}