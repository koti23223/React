import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ShoesCollection() {

  const [womensShoes, setWomensShoes] = useState([]);
  const [mensShoes, setMensShoes] = useState([]);

  useEffect(() => {

    const fetchShoes = async () => {
      try {
        const womenRes = await axios.get(
          "https://dummyjson.com/products/category/womens-shoes?limit=100"
        );

        const menRes = await axios.get(
          "https://dummyjson.com/products/category/mens-shoes?limit=100"
        );

        setWomensShoes(womenRes.data.products);
        setMensShoes(menRes.data.products);

      } catch (error) {
        console.error("Error fetching shoes:", error);
      }
    };

    fetchShoes();

  }, []);

  return (
    <div className="container mt-5 pt-5">

      {/* 👠 WOMEN SHOES SECTION */}
      <h2 className="text-center mb-4">Women's Shoes</h2>

      <div className="row mb-5">
        {womensShoes.map((item) => (
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

      {/* 👞 MEN SHOES SECTION */}
      <h2 className="text-center mb-4">Men's Shoes</h2>

      <div className="row">
        {mensShoes.map((item) => (
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

    </div>
  );
}