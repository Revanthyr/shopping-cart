import { useEffect, useState } from "react";
import Product from "./Product";
//cache items
function Shopping() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (localStorage.fetchedItems === undefined) {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => {
          setItems(json);

          localStorage.setItem("fetchedItems", JSON.stringify(json));
        });
    } else {
      setItems(JSON.parse(localStorage.fetchedItems));
    }
  }, []);

  return (
    <div className="shop-container">
      <h1>Shop Shop Shop!</h1>
      <section className="products">
        {items.map((current) => {
          return <Product key={current.id}></Product>;
        })}
      </section>
    </div>
  );
}

export { Shopping };
