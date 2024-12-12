import { Outlet } from "react-router";
import Navbar from "../../Components/Shared/Navbar";
import Footer from "../../Components/Shared/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
