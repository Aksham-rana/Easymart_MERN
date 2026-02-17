import axios from 'axios';
import React, { useEffect, useState} from 'react';
import { Navigate, useParams } from 'react-router-dom';
import '../../Style/productDetails.css';
import BackNav from './BackNav';
import { useCart } from '../../Context/CartContext';
import { useNavigate } from 'react-router-dom';

const ViewDetails = () => {
    const navigate = useNavigate();
  const { cart, addToCart, removeFromCart } = useCart();

  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then(res => {
        setProduct(res.data);
      });
  }, [id]);

  if (!product) return <p>Loading...</p>;

  // ✅ check if product already in cart
  const isInCart = cart.some(item => item.id === product.id);

  return (
    <>
      <BackNav />

      <div className="pd-page">
        <div className="pd-card">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="pd-image"
          />

          <div className="pd-details">
            <h2 className="pd-title">{product.title}</h2>

            <div className="pd-meta">
              <p className="pd-price">₹{product.price}</p>
              <p className="pd-rating">⭐ {product.rating}</p>
              <p className="pd-status">{product.availabilityStatus}</p>
            </div>

            <div className="pd-actions">
              <button
                className={`pd-btn pd-add-cart ${isInCart ? 'pd-added' : ''}`}
                onClick={() =>
                  isInCart
                    ? removeFromCart(product.id)
                    : addToCart(product)
                }
              >
                {isInCart ? 'Remove from Cart' : 'Add to Cart'}
              </button>

              <button className="pd-btn pd-buy-now"
              onClick={()=>navigate('/cart')}
              >
                Buy Now
              </button>
            </div>

            <hr className="pd-divider" />

            <div className="pd-section">
              <h3 className="pd-section-title">Description</h3>
              <p className="pd-description">{product.description}</p>
            </div>

            <div className="pd-section">
              <h3 className="pd-section-title">Product Info</h3>
              <ul className="pd-info">
                <li><strong>Brand:</strong> {product.brand}</li>
                <li><strong>Category:</strong> {product.category}</li>
                <li><strong>Warranty:</strong> {product.warrantyInformation}</li>
                <li><strong>Shipping:</strong> {product.shippingInformation}</li>
                <li><strong>Return Policy:</strong> {product.returnPolicy}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewDetails;