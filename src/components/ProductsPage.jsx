import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { toggleSection } from "../store";
import { Link } from "react-router-dom";
import CreateCard from "./CreateCard";
import '../style/product.css'

export default function ProductsPage() {
  const products = useSelector((state) => state.products);
  const openSection = useSelector((state) => state.openSection);
  const navigate = useNavigate()
  const { string } = useParams();
  const dispatch = useDispatch();


  const filterData = products.filter(item => {
    if (string === 'all') {
      return true; // If the string is 'all', return all products.
    }
  
    if (string === 'under200') {
      return item.price <= 200; // Filter products with price <= 500
    }
  
    if (string === 'above200') {
      return item.price > 200; // Filter products with price > 500
    }
  
    return item.category === string; // Filter by category
  });
  

  return (
    <div className="productPage">
      <section className="filters">
        <div>
          <div onClick={() => dispatch(toggleSection("Price"))} style={openSection==='Price'?{borderBottom:'none'}:{}}>
            <h1>Price</h1>
            <FontAwesomeIcon
              icon={openSection === "Price" ? faMinus : faPlus}
            />
          </div>
          {openSection === "Price" && (
            <ul>
              <li onClick={()=>navigate('/productPage/under200')}>Under $200</li>
              <li onClick={()=>navigate('/productPage/above200')}>Above $200</li>
            </ul>
          )}
        </div>

        <div>
          <div onClick={() => dispatch(toggleSection("Gender"))} style={openSection==='Gender'?{borderBottom:'none'}:{}}>
            <h1>Gender</h1>
            <FontAwesomeIcon
              icon={openSection === "Gender" ? faMinus : faPlus}
            />
          </div>
          {openSection === "Gender" && (
            <ul>
              <li onClick={()=>navigate('/productPage/Men')}>Men</li>
              <li onClick={()=>navigate('/productPage/Women')}>Women</li>
            </ul>
          )}
        </div>
      </section>

      <section className="displayProducts">
            <div>
            <h1>{string === 'all' || string === 'under200' || string === 'above200'?'Your Search Results':`${string}s`}</h1>
            <p>{filterData.length} items found</p>
            <Link to='#'>Find what you're looking for?</Link>

            <div>
            {filterData.map(item=>(
                <CreateCard key={item.id} item={item} onClick={()=>navigate(`/productDetail/${item.id}`)} />
            ))}

            </div>


            </div>
      </section>
    </div>
  );
}
