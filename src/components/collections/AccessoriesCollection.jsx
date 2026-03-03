import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AccessoriesCollection() {

  const [womensBags, setWomensBags] = useState([]);
  const [sunglasses, setSunglasses] = useState([]);

  useEffect(() => {

    const fetchAccessories = async () => {
      try {
        const bagsRes = await axios.get(
          "https://dummyjson.com/products/category/womens-bags?limit=100"
        );

        const sunRes = await axios.get(
          "https://dummyjson.com/products/category/sunglasses?limit=100"
        );

        setWomensBags(bagsRes.data.products || []);
        setSunglasses(sunRes.data.products || []);

      } catch (error) {
        console.error("Error fetching accessories:", error);
      }
    };

    fetchAccessories();

  }, []);

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

      {renderSection("Women's Bags", womensBags)}
      {renderSection("Sunglasses", sunglasses)}

    </div>
  );
}