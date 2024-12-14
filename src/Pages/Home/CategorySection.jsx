import { Button } from "antd";

const CategorySection = () => {
  const categories = [
    {
      id: 1,
      imgSrc: "https://i.ibb.co.com/wgMzVNv/Frame-1707481877.png",
      label: "WHOLESALE",
      title: "Title sdfvgkj soid",
      description:
        "Explore premium, high-quality THCA strains with unmatched potency and value.",
    },
    {
      id: 2,
      imgSrc: "https://i.ibb.co.com/8dJd8Dx/Frame-1707481877-1.png",
      label: "WHOLESALE",
      title: "Another Title",
      description:
        "Discover exclusive retail products with the finest quality and value.",
    },
    {
      id: 3,
      imgSrc: "https://i.ibb.co.com/DLKPNvD/Frame-1707481877-2.png",
      label: "WHOLESALE",
      title: "Third Title Example",
      description:
        "Find high-quality strains and products with unbeatable pricing.",
    },
  ];

  return (
    <div className="md:p-20 mx-10 md:px-28">
      <h1 className="md:text-4xl md:text-start text-2xl text-center my-8 font-bold clash">
        Browse <span className="text-[#00863D]">Categories</span>
      </h1>
      <div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
          {categories.map((category) => (
            <div
              key={category.id}
              className="p-3 border rounded-2xl shadow-xl hover:shadow-2xl"
            >
              <img
                className="w-full rounded-2xl h-56"
                src={category.imgSrc}
                alt={category.title}
              />
              <p className="bg-[#FFC313] py-1 px-3 my-3 rounded-3xl w-[40%]">
                {category.label}
              </p>
              <h1 className="md:text-2xl text-xl font-bold">
                {category.title}
              </h1>
              <p className="my-3 line-clamp-2">{category.description}</p>
              <Button className="bg-[#00863D] w-full font-semibold text-white text-xl py-5 rounded-xl">
                SHOP NOW
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
