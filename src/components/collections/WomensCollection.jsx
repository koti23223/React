import React, { useEffect, useState } from "react";
import axios from "axios";

export default function WomensCollection() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          "https://dummyjson.com/products/category/womens-dresses"
        );

        setProducts(res.data.products); 
        setLoading(false);
      } catch (error) {
        console.error("Error loading products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mt-5 pt-5">

      <h2 className="text-center mb-4">Women's Dresses Collection</h2>

      {loading ? (
        <h4 className="text-center">Loading products...</h4>
      ) : (
        <div className="row">
          {products.map((item) => (
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
      )}

    </div>
  );
}