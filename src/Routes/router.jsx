import { createBrowserRouter } from "react-router";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import FAQ from "../Pages/FAQ";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";

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
        path: "/shop",
        element: <Shop />,
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
    ],
  },
]);
