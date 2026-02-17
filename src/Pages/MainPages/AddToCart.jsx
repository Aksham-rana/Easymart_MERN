<<<<<<< HEAD
import { useCart } from "../../Context/CartContext";
import "../../Style/addToCart.css";
import Navigation from "./Navigation";
import { useNavigate } from "react-router-dom";

const AddToCart = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, increaseQty, decreaseQty } = useCart();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navigation />

      <div className="cart-page">
        <div className="cart-container">
          <h2 className="cart-title">My Cart</h2>

          {cart.length === 0 ? (
            <h2 className="cart-empty">Your cart is empty</h2>
          ) : (
            <>
              {cart.map(item => (
                <div className="cart-item" key={item.id}>
                  <div className="cart-item-info">
                    <h4 className="cart-item-title">{item.title}</h4>
                    <p className="cart-item-price">
                      ₹{item.price} × {item.quantity} = ₹{item.price * item.quantity}
                    </p>
                  </div>

                  <div className="cart-actions">
                    <div className="cart-qty">
                      <button onClick={() => decreaseQty(item.id)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increaseQty(item.id)}>+</button>
                    </div>

                    <button
                      className="cart-remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}

              {/* BUY NOW SECTION */}
              <div className="cart-footer">
                <p className="cart-total">Total: ₹{totalPrice}</p>
                <button className="cart-buy-btn"
                onClick={()=>navigate('/buy')}
                >Buy Now</button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AddToCart;
=======
import { useCart } from "../../Context/CartContext";
import "../../Style/AddToCart.css";
import Navigation from "./Navigation";
import { useNavigate } from "react-router-dom";

const AddToCart = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, increaseQty, decreaseQty } = useCart();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navigation />

      <div className="cart-page">
        <div className="cart-container">
          <h2 className="cart-title">My Cart</h2>

          {cart.length === 0 ? (
            <h2 className="cart-empty">Your cart is empty</h2>
          ) : (
            <>
              {cart.map(item => (
                <div className="cart-item" key={item.id}>
                  <div className="cart-item-info">
                    <h4 className="cart-item-title">{item.title}</h4>
                    <p className="cart-item-price">
                      ₹{item.price} × {item.quantity} = ₹{item.price * item.quantity}
                    </p>
                  </div>

                  <div className="cart-actions">
                    <div className="cart-qty">
                      <button onClick={() => decreaseQty(item.id)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increaseQty(item.id)}>+</button>
                    </div>

                    <button
                      className="cart-remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}

              {/* BUY NOW SECTION */}
              <div className="cart-footer">
                <p className="cart-total">Total: ₹{totalPrice}</p>
                <button className="cart-buy-btn"
                onClick={()=>navigate('/buy')}
                >Buy Now</button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AddToCart;

>>>>>>> 7c2baa7a2322bf3e6962cdc47b4efbb2fdd3508d
