import { useState } from "react";
import PropTypes from "prop-types";

export default function Product({ cart, setCart, name, price, img }) {
  const [inputIsShown, setInputIsShown] = useState(false);
  const [inputValue, setInputValue] = useState(1);
  const [validationError, setValidationError] = useState(false);

  if (inputIsShown) {
    return (
      <div className="product">
        <img src={img} alt="some picture" />
        <p>{name}</p>
        <p>{price}$</p>
        <div className="buy-input">
          <button
            onClick={() => {
              inputValue > 1
                ? setInputValue(inputValue - 1)
                : setInputIsShown(false);
            }}
          >
            -
          </button>
          <label>
            <input
              type="number"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
          </label>
          <button onClick={() => setInputValue(parseInt(inputValue) + 1)}>
            +
          </button>
        </div>
        <button
          onClick={() => {
            if (isNaN(parseInt(inputValue))) {
              setValidationError(true);
            } else {
              setValidationError(false);
              if (cart !== undefined) {
                if (cart.filter((curr) => curr.name === name).length !== 0) {
                  const newCart = [...cart];
                  // trouver l'index,
                  // augmenter la quantité
                  let index = cart.indexOf(
                    cart.filter((curr) => curr.name === name)[0]
                  );
                  newCart[index].quantity += parseInt(inputValue);
                  setCart(newCart);
                } else {
                  const newCart = [...cart];
                  newCart.push(
                    createCartItem(name, img, price, parseInt(inputValue))
                  );

                  setCart(newCart);
                }
              } else {
                const newCart = [
                  createCartItem(name, img, price, parseInt(inputValue)),
                ];
                setCart(newCart);
              }
            }
          }}
        >
          Add to Cart
        </button>
        {validationError && <div>Only numbers are allowed!</div>}
      </div>
    );
  }

  return (
    <div className="product">
      <img src={img} alt="some picture" />
      <p>{name}</p>
      <p>{price}$</p>
      <button onClick={() => setInputIsShown(true)}>Buy Now</button>
    </div>
  );
}
Product.propTypes = {
  cart: PropTypes.array,
  setCart: PropTypes.func,
  name: PropTypes.string,
  price: PropTypes.number,
  img: PropTypes.string,
};
function createCartItem(name, img, price, quantity) {
  return { name, img, price, quantity, id: crypto.randomUUID() };
}
