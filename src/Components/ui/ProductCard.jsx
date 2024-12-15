import { Button } from "antd";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router";

const ProductCard = ({ image, label, title, description, price, id }) => {
  return (
    <div className="border min-w-[300px] max-w-[500px] h-[535px] rounded-2xl m-10 p-2 flex items-start flex-col">
      <div className="relative">
        <img
          className="w-full rounded-t-2xl h-[190px] object-cover"
          src={image}
          alt={title}
        />
        <div className="p-1 border absolute bg-[#e8f7ee] top-5 right-5 rounded-full z-10">
          <CiHeart size={20} />
        </div>
      </div>
      <p className="bg-[#FFC313] py-1 px-3 text-sm my-3 rounded-3xl w-[45%]">
        {label}
      </p>
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="my-2 text-start line-clamp-2">{description}</p>
      <p className="text-2xl font-semibold">{price}</p>

      {/* Spacer to push the button to the bottom */}
      <div className="flex-grow"></div>

      <Link to={`/shop/category/${id}/${id}`}>
        <Button className="bg-[#00863D] w-full mt-2 py-4 text-white">
          SHOP NOW
        </Button>
      </Link>
    </div>
  );
};

export default ProductCard;
