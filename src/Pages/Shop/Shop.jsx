import { useParams } from "react-router";
import TitleBg from "../../Components/ui/TitleBg";
import thcaFImg from "../../assets/aboutUsImg.png";
import productImg1 from "../../assets/Frame 1707481877 (3).png";

const Shop = () => {
  const { id } = useParams();

  return (
    <>
      <TitleBg title="THCA Flower" />
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#eaf7ea] -z-10"></div>
        <div className="flex items-center py-24 px-32  justify-center gap-5">
          <img className="w-[500px] h-[350px]" src={thcaFImg} alt="" />
          <div>
            <h1 className="text-4xl font-bold mb-5">
              THCA <span className="text-[#00863D]">Flower</span>
            </h1>
            <p>
              Explore the finest selection of premium THCA flower strains,
              expertly cultivated for exceptional quality and maximum potency.
              Whether you’re an enthusiast or a business owner, our THCA flower
              offers a superior experience while staying fully compliant with
              legal standards. Choose from ounces, quarter pounds, or wholesale
              bulk options tailored to your needs.
            </p>
          </div>
        </div>
      </div>
      <div className="p-20">
        <h1 className="text-4xl  border-b-4 w-[40%] pb-3 border-[#00863D] font-semibold">
          <span className="text-[#00863D]">Premium</span> THCA Flower
        </h1>
        <div>
          <div>
            <img src={productImg1} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
