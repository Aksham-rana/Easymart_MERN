import React from 'react'
import { useState, useEffect } from 'react'
import '../../Style/Home.css'
import { getProduct } from '../../api/productApis';
import {useNavigate} from 'react-router-dom'
import Navigation from './Navigation';

const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  
  useEffect(()=>{
    getProduct()
    .then(res=>{
      setProducts(res.data.products)
    })
  },[])

  return (
    <>
      <Navigation />
      <div className="home">
        <h1>Discover Products</h1>

        <div className="product-grid">
          {products.map(item => (
            <div className="product-card" key={item.id}>
              <div className="img-box">
                <img src={item.thumbnail} alt={item.title} />
              </div>

              <h4>{item.title}</h4>

              <div className="info">
                <span className="price">${item.price}</span>
                <span className="rating">⭐ {item.rating}</span>
              </div>

              <button onClick={() => navigate(`/productDetails/${item.id}`)}>View Details</button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
