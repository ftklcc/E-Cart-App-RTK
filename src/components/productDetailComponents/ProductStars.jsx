import React from "react";
import { FaStar } from "react-icons/fa6";


const ProductStars = ({ selectedProduct }) => {
  const rating = selectedProduct?.rating || 0;
  const stars = Array.from({ length: 5 });
  return (
    <div className="stars-container">
      {stars.map((_, i) => {
        const calculateFill = Math.max(0, Math.min(1, rating - i))
        const fillPercentage = (calculateFill * 100).toFixed(0)
        return (
          <div key={i} className="star-box" >
            <FaStar className="star-empty" />
            <div className="star-overlay" style={{ width: `${fillPercentage}%` }} >
              <FaStar className="star-fiil" />
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default ProductStars;
