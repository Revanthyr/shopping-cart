import { Link } from "react-router-dom";

import { Outlet } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart</Link> {/* TODO: change this to dynamic svg*/}
      </nav>
      <Outlet></Outlet>
    </>
  );
}
export { Navbar };
