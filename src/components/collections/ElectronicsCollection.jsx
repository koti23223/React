import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ElectronicsCollection() {

  const [smartphones, setSmartphones] = useState([]);
  const [laptops, setLaptops] = useState([]);
  const [tablets, setTablets] = useState([]);
  const [mensWatches, setMensWatches] = useState([]);
  const [womensWatches, setWomensWatches] = useState([]);

  useEffect(() => {

    const fetchElectronics = async () => {
      try {
        const smartRes = await axios.get(
          "https://dummyjson.com/products/category/smartphones?limit=100"
        );

        const laptopRes = await axios.get(
          "https://dummyjson.com/products/category/laptops?limit=100"
        );

        const tabletRes = await axios.get(
          "https://dummyjson.com/products/category/tablets?limit=100"
        );

        const menWatchRes = await axios.get(
          "https://dummyjson.com/products/category/mens-watches?limit=100"
        );

        const womenWatchRes = await axios.get(
          "https://dummyjson.com/products/category/womens-watches?limit=100"
        );

        setSmartphones(smartRes.data.products);
        setLaptops(laptopRes.data.products);
        setTablets(tabletRes.data.products);
        setMensWatches(menWatchRes.data.products);
        setWomensWatches(womenWatchRes.data.products);

      } catch (error) {
        console.error("Error fetching electronics:", error);
      }
    };

    fetchElectronics();

  }, []);

  // Reusable Section UI
  const renderSection = (title, items) => (
    <>
      <h2 className="text-center mb-4 mt-5">{title}</h2>
      <div className="row">
        {items.map((item) => (
          <div className="col-md-3 mb-4" key={item.id}>
            <div className="card h-100 shadow-sm">

              <img
                src={item.thumbnail}
                className="card-img-top"
                alt={item.title}
                style={{ height: "220px", objectFit: "cover" }}
              />

              <div className="card-body text-center">
                <h6>{item.title}</h6>
                <p className="fw-bold">₹ {item.price}</p>
                <button className="btn btn-dark btn-sm w-100">
                  Add to Cart
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div className="container mt-5 pt-5">

      {renderSection("Smartphones", smartphones)}
      {renderSection("Laptops", laptops)}
      {renderSection("Tablets", tablets)}
      {renderSection("Men's Watches", mensWatches)}
      {renderSection("Women's Watches", womensWatches)}

    </div>
  );
}