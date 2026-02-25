import React from "react";

import { Footer } from "./footer.jsx"; 
import { Navbar } from "./Navbar.jsx";
import Collections from "./Collections.jsx";


export function Home() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div className="bg-dark text-white text-center py-5" 
      style={{
          backgroundImage: "url('./backgroundimg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh"
        }}>
        <div className="d-flex flex-column justify-content-center align-items-start h-100 container text-dark">
          <h1 className="display-4 fw-bold ">Elevate Your Everyday</h1>
          <p className="lead w-50">
            Sophisticated essentials crafted with quality and responsibility in mind.
          </p>
          <div className="mt-3">
            <button className="btn btn-dark me-3">Shop New Arrivals</button>
            <button className="btn btn-outline-dark">Explore Collections</button>
          </div>
        </div>
      </div>
      <Collections/>
      <Footer />
    </div>
  );
}