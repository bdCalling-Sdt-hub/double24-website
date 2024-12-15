import { Outlet, ScrollRestoration } from "react-router";
import Navbar from "../../Components/Shared/Navbar";
import Footer from "../../Components/Shared/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default Main;
