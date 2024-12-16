import { FaStar } from "react-icons/fa";
import TitleBg from "../../Components/ui/TitleBg";
import productImg1 from "../../assets/bubbaKush.png";
import productImg2 from "../../assets/Frame 1000011859.png";
import productImg3 from "../../assets/Frame 1707481910.png";
import productImg4 from "../../assets/Frame 1707481911.png";
import { useState } from "react";
import { FiCheckSquare } from "react-icons/fi";
import { Tabs } from "antd";
import ProductCard from "../../Components/ui/ProductCard";

const productData = {
  title: "Bubba Kush THCA Flower",
  reviews: [
    {
      name: "John Doe",
      rating: 5,
      comment: "This product is amazing. I love it!",
    },
    {
      name: "Jane Smith",
      rating: 4,
      comment: "I really dislike this product. It's not what I expected.",
    },
  ],
  price: {
    halfPound: 750,
    onePound: 1100,
    twoPound: 2100,
    oneAndHalfPound: 1650,
  },
  shortDescription:
    "Relax with Bubba Kush THCA Flower, an indica known for its rich coffee and chocolate flavors. Perfect for winding down, it offers deep relaxation with a 22.7% THCA level. Available in half and full pounds, it’s ideal for chill evenings This product contains less than 0.3% Delta-9 THC and complies with the 2018 U.S. Farm Bill, making it legal in most states (except HI, ID, MN, OR, RI, UT, and VT).",
  availability: "available",
  tags: "THCA Flower",
  category: "THCA Flower",
};

const relatedProductData = [
  {
    id: 1,
    image: productImg1,
    label: "WHOLESALE",
    title: "Bubba Kush",
    description: "THCA Flower Pounds Indica | 22.70% THCa | HP, LB",
    price: "$750 - $1000",
  },
  {
    id: 2,
    image: productImg1,
    label: "PREMIUM",
    title: "Pineapple Express",
    description: "Sativa | 18.90% THCa | HP, LB",
    price: "$650 - $900",
  },
  {
    id: 3,
    image: productImg1,
    label: "WHOLESALE",
    title: "OG Kush",
    description: "Hybrid | 20.50% THCa | HP, LB",
    price: "$800 - $1100",
  },
  {
    id: 4,
    image: productImg1,
    label: "ORGANIC",
    title: "Gelato",
    description: "Hybrid | 21.20% THCa | HP, LB",
    price: "$700 - $950",
  },
  {
    id: 5,
    image: productImg1,
    label: "ORGANIC",
    title: "Gelato",
    description: "Hybrid | 21.20% THCa | HP, LB",
    price: "$700 - $950",
  },
  {
    id: 6,
    image: productImg1,
    label: "ORGANIC",
    title: "Gelato",
    description: "Hybrid | 21.20% THCa | HP, LB",
    price: "$700 - $950",
  },
];

const Product = () => {
  const [mainImage, setMainImage] = useState(productImg1); // Initial main image
  const [selectedWeight, setSelectedWeight] = useState("halfPound"); // Default weight
  const [quantity, setQuantity] = useState(1);

  // Function to calculate total price
  const totalPrice = productData.price[selectedWeight] * quantity;

  const onChange = (key) => {
    console.log(key);
  };

  const description = (
    <>
      <div>
        <h1 className="text-lg font-bold">Deep Relaxing Indica</h1>
        <p>
          Bubba Kush is a classic indica, a cross between OG Kush and another
          mystery indica, with origins tracing back to the legendary cannabis
          scene of New Orleans. This strain delivers powerful relaxation, making
          it the ideal choice for a chill night.
        </p>
      </div>
      <div className="my-5">
        <h1 className="text-lg font-bold">Rich Flavor Profile</h1>
        <p>
          Experience the rich aromas of coffee and chocolate that make Bubba
          Kush a standout. With earthy tones and a touch of sweetness, it’s like
          enjoying your favorite coffee shop while you relax. The flavor
          enhances its calming effects for the ultimate chill experience.
          Visually Impressive BudsBubba Kush features dense, bulky buds that are
          dark green with occasional purple hues. Coated in a glistening layer
          of trichomes, it’s as pleasing to the eyes as it is to the senses.
        </p>
      </div>
      <div>
        <h1 className="text-lg   font-bold">Perfect for Evening Use</h1>
        <p>
          Bubba Kush THCA Flower is your go-to for evening relaxation. Whether
          you choose a half pound or a full pound, you’ll be set for an
          unforgettable relaxation experience. Ready to kick back? This
          legendary indica has you covered. 4o mini
        </p>
      </div>
    </>
  );

  const items = [
    {
      key: "1",
      label: <p className="text-xl">Description</p>,
      children: description,
    },
    {
      key: "2",
      label: <p className="text-xl">Additional Information</p>,
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: <p className="text-xl">Reviews</p>,
      children: "Content of Tab Pane 3",
    },
  ];

  return (
    <>
      <TitleBg title="" />
      <div className="p-28">
        <div className="flex items-center justify-center gap-5">
          <div className="w-[45%] flex flex-col items-center">
            {/* Main Image */}
            <div className="w-full mb-5">
              <img
                className="w-[600px] h-[440px]"
                src={mainImage}
                alt="Main Image"
                preview={false}
              />
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2">
              <img
                src={productImg1}
                alt="Thumbnail 1"
                className="cursor-pointer  h-28 w-28 transition-transform transform hover:scale-110"
                onClick={() => setMainImage(productImg1)}
              />
              <img
                src={productImg2}
                alt="Thumbnail 2"
                className="cursor-pointer  h-28 w-28 transition-transform transform hover:scale-110"
                onClick={() => setMainImage(productImg2)}
              />
              <img
                src={productImg3}
                alt="Thumbnail 3"
                className="cursor-pointer h-28 w-28 transition-transform transform hover:scale-110"
                onClick={() => setMainImage(productImg3)}
              />
              <img
                src={productImg4}
                alt="Thumbnail 4"
                className="cursor-pointer h-28 w-28 transition-transform transform hover:scale-110"
                onClick={() => setMainImage(productImg4)}
              />
            </div>
          </div>
          <div className="space-y-4 w-[55%]">
            <h1 className="text-3xl clash">{productData?.title}</h1>
            <div className="flex gap-2">
              <div className="flex gap-1">
                <FaStar className="text-orange-600" />
                <FaStar className="text-orange-600" />
                <FaStar className="text-orange-600" />
                <FaStar className="text-orange-600" />
                <FaStar className="text-orange-600" />
              </div>
              <p>{productData?.reviews.length} Reviews</p>
            </div>
            <div className="flex gap-3 text-3xl font-bold text-[#00863D]">
              <p>${productData?.price.halfPound}</p> -
              <p>${productData?.price.twoPound}</p>
            </div>
            <p>{productData?.shortDescription}</p>
            <div className="flex items-center gap-10">
              <h1 className="font-bold text-2xl">Weight</h1>
              {/* Dropdown for weight selection */}
              <select
                value={selectedWeight}
                onChange={(e) => setSelectedWeight(e.target.value)}
                className="border rounded-xl px-4 py-3 w-[40%] bg-gray-200"
              >
                <option value="halfPound">Half Pound</option>
                <option value="onePound">One Pound</option>
                <option value="oneAndHalfPound">One and a Half Pound</option>
                <option value="twoPound">Two Pound</option>
              </select>
            </div>

            {/* Quantity and Price */}
            <div className="flex items-center gap-4 mt-3">
              <div className="flex border font-semibold p-2 rounded-2xl border-gray-300 items-center gap-3">
                <button
                  onClick={() =>
                    setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
                  }
                  className="border bg-gray-200 rounded-2xl px-3 py-1"
                >
                  -
                </button>
                <span className="text-xl">{quantity}</span>
                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="border bg-gray-200 rounded-2xl px-3 py-1"
                >
                  +
                </button>
              </div>
              <p className="text-xl font-bold text-[#005125]">
                ${totalPrice.toFixed(2)}
              </p>
            </div>

            {/* Add to Cart Button */}
            <div className="flex text-xl font-bold gap-4">
              <button className="mt-4 w-40 text-[#005125] px-5 py-3 rounded-xl border border-[#005125] hover:bg-[#006F2C] hover:text-white">
                Add to Cart
              </button>
              <button className="mt-4 w-40 bg-[#005125] text-white px-5 py-3 rounded-xl hover:bg-[#006F2C]">
                Order Now
              </button>
            </div>
            <h1 className="flex gap-2 items-center">
              <span className="font-bold">Available:</span>
              {productData?.availability === "available" ? (
                <span className="text-green-600 flex gap-1">
                  In Stock <FiCheckSquare />
                </span>
              ) : (
                <span className="text-red-500">Out Of Stock</span>
              )}
            </h1>
            <h1>
              <span className="font-bold">Tags: </span> {productData?.tags}
            </h1>
            <h1>
              <span className="font-bold">Category:</span>{" "}
              {productData?.category}
            </h1>
          </div>
        </div>
        <div className="mt-10">
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
      </div>
      <div className="mb-10">
        <h1 className="clash text-4xl border-b-4 border-[#00863D] w-[35%]">
          <span className="text-[#00863D]">Related</span> Products
        </h1>
        <div className="grid grid-cols-4 me-10">
          {relatedProductData?.map((product, i) => (
            <ProductCard
              image={product?.image}
              label={product?.label}
              title={product?.title}
              description={product?.description}
              price={product?.price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
