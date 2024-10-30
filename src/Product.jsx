import { useState } from "react";

export default function Product() {
  const [inputIsShown, setInputIsShown] = useState(false);
  const [inputValue, setInputValue] = useState(1);

  if (inputIsShown) {
    return (
      <div className="product">
        <img src="" alt="some picture" />
        <p>Some Product</p>
        <div className="buy-input">
          <button
            onClick={() => {
              inputValue > 0
                ? setInputValue(inputValue - 1)
                : setInputValue(inputValue);
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
        <button>Add to Cart</button>
      </div>
    );
  }

  return (
    <div className="product">
      <img src="" alt="some picture" />
      <p>Some Product</p>
      <button onClick={() => setInputIsShown(true)}>Buy Now</button>
    </div>
  );
}
