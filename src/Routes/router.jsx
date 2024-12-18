import { createBrowserRouter } from "react-router";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import FAQ from "../Pages/FAQ";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";
import Product from "../Pages/Shop/Product";
import Cart from "../Pages/Cart";
import Checkout from "../Pages/Checkout";
import FavouritePage from "../Pages/FavouritePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop/category/:id",
        element: <Shop />,
      },
      {
        path: "/shop/category/:id/:id",
        element: <Product />,
      },
      {
        path: "/f-a-q",
        element: <FAQ />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
      {
        path: "/favorite",
        element: <FavouritePage />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);
