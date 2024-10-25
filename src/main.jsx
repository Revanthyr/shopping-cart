import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Home } from "./Home.jsx";
import { Cart } from "./Cart.jsx";
import { Shopping } from "./Shopping.jsx";
import { Navbar } from "./Navbar.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar></Navbar>,
    children: [
      { path: "shop", element: <Shopping></Shopping> },
      { index: true, element: <Home></Home> },
      { path: "cart", element: <Cart></Cart> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
