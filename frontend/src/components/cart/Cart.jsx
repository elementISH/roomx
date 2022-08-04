import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getTotals, removeFromCart } from "../../slices/cartSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="cart-container">
      {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is currently empty</p>
          <div className="start-shopping">
            <Link to="/rooms">
              <span>Book Rooms!</span>
            </Link>
          </div>
        </div>
      ) : (
        <div style={{ width: "100%" }}>
          <div className="titles">
            <span className="product-title title">Product</span>
            <span className="total title">Total</span>
          </div>
          <div className="cart-items">
            {cart.cartItems &&
              cart.cartItems.map((cartItem) => (
                <div className="cart-item" key={cartItem.id}>
                  <div className="cart-product">
                    <img
                      src={cartItem.image}
                      alt={cartItem.name}
                      className="product-image"
                    />
                    <div>
                      <button
                        className="remove-button add-pointer"
                        onClick={() => handleRemoveFromCart(cartItem)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  <div className="cart-product-total-price">
                    ${(cartItem.price * cartItem.cartQuantity).toFixed(2)}
                  </div>
                </div>
              ))}
          </div>
          <div className="cart-summary">
            <button
              className="clear-btn add-pointer"
              onClick={() => handleClearCart()}
            >
              Clear Cart
            </button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">${cart.cartTotalAmount}</span>
              </div>
              <p>Taxes and shipping calculated at checkout</p>
              <button
                className="checkout-button add-pointer"
                onClick={() => {
                  navigate("/checkout");
                }}
              >
                Check out
              </button>
              <div className="continue-shopping">
                <Link to="/rooms">
                  <span>book more!</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
