import { useEffect, useState } from "react";
import Product from "./Product";
import { useOutletContext } from "react-router-dom";

function Shopping() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useOutletContext();
  useEffect(() => {
    if (localStorage.fetchedItems === undefined) {
      setLoading(true);
      fetch("https://fakestoreapi.com/products")
        .then((res) => {
          if (res.status >= 400) {
            throw new Error("server error");
          }

          return res.json();
        })
        .then((json) => {
          setItems(json);

          localStorage.setItem("fetchedItems", JSON.stringify(json));
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => setLoading(false));
    } else {
      setItems(JSON.parse(localStorage.fetchedItems));
    }
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error)
    return <p>A network error has occured. Please try reloading the page.</p>;
  return (
    <div className="shop-container">
      <h1>Shop Shop Shop!</h1>
      <section className="products">
        {items.map((current) => {
          return (
            <Product
              key={current.id}
              cart={cart}
              setCart={setCart}
              name={current.title}
              price={current.price}
              img={current.image}
            ></Product>
          );
        })}
      </section>
    </div>
  );
}

export { Shopping };
