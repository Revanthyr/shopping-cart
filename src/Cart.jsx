import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";

function Cart() {
  const [cart, setCart] = useOutletContext();
  let totalAmount = cart.reduce((acc, current) => {
    return (acc += current.quantity * current.price);
  }, 0);
  console.log(totalAmount);
  return (
    <div className="shop-container">
      <h1>Cart</h1>
      <section className="products">
        {cart.map((current) => (
          <div className="cart-product" key={current.id}>
            <img src={current.img} alt="Product Image" />
            <p>
              {current.name} <span> x {current.quantity}</span>
            </p>
            <p>{current.price * current.quantity}$ </p>
          </div>
        ))}
      </section>
      <button>Checkout {totalAmount}$ </button>
    </div>
  );
}
export { Cart };
Cart.propTypes = {
  cart: PropTypes.array,
};

// props array
// shows all elements of the arrya
// shows cost
// etc...
