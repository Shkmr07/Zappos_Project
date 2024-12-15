import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPlus } from '@fortawesome/free-solid-svg-icons';
import '../style/productDetail.css'; 
import { setCartItems } from "../store";

const ProductDetail = () => {
  const products = useSelector((state) => state.products);
  const { id } = useParams();
  const getData = products.find(item => item.id === Number(id));
  const dispatch = useDispatch();

  const [selectedSize, setSelectedSize] = useState(""); // State to track the selected size
  console.log(selectedSize)
  function addToCart() {
    const cartItem = { ...getData, size: selectedSize };
    dispatch(setCartItems(cartItem));
  }

  return (
    <div className="product-page">
      <div className="product-image">
        <img src={getData.image} alt={getData.title} />
      </div>
      <div className="product-details">
        <h2 className="product-title">{getData.title}</h2>
        <p className="product-code">{String(Date.now()).slice(0, 3)}</p>
        <p className="product-category">{getData.category}</p>
        <p className="product-price">
          ${getData.price}
          <span className="installments">
            or 4 payments of $24.99 with afterpay
          </span>
        </p>
        <div className="product-rating">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <span>(396)</span>
        </div>
        <div className="product-size">
          <p>{getData.category} Sizes:</p>
          <div className="size-options">
            {/* Dynamically setting the selected size */}
            {["5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"].map((size) => (
              <button
                key={size}
                className={selectedSize === size ? "selected" : ""}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <div className="product-width">
          <p>Width Options:</p>
          <button>B - Medium</button>
        </div>
        <div className="add-to-bag">
          <button onClick={addToCart}>
            <FontAwesomeIcon icon={faPlus} /> Add to Bag
          </button>
        </div>
        <p className="product-shipping">FREE upgraded shipping & returns with Amazon Prime</p>
        <div className="size-chart">
          <Link to="/size-chart">View the size chart</Link>
        </div>
        <div className="product-description">
          <h3>Product Information</h3>
          <p>
            Exude sporty vibes as you head out for fun and games wearing New
            Balance® {getData.title}, crafted in a retro-inspired style
            with varsity brand logo detail in contrasting colors for elevated
            style. The sneakers come with a suede & mesh upper featuring
            exaggerated drag design, leather lining, split eyewear, and leather
            insole. The lace-up closure on the sneakers is designed for easy
            adjustability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;


