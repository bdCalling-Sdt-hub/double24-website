import { Button } from "antd";

const CategorySection = () => {
  const categories = [
    {
      id: 1,
      imgSrc:
        "https://masterpiecer-images.s3.yandex.net/c0e41fe67dce11eea16a222e7fa838a6:upscaled",
      label: "WHOLESALE",
      title: "Title sdfvgkj soid",
      description:
        "Explore premium, high-quality THCA strains with unmatched potency and value.",
    },
    {
      id: 2,
      imgSrc:
        "https://masterpiecer-images.s3.yandex.net/c0e41fe67dce11eea16a222e7fa838a6:upscaled",
      label: "RETAIL",
      title: "Another Title",
      description:
        "Discover exclusive retail products with the finest quality and value.",
    },
    {
      id: 3,
      imgSrc:
        "https://masterpiecer-images.s3.yandex.net/c0e41fe67dce11eea16a222e7fa838a6:upscaled",
      label: "WHOLESALE",
      title: "Third Title Example",
      description:
        "Find high-quality strains and products with unbeatable pricing.",
    },
  ];

  return (
    <div className="p-20">
      <h1 className="text-4xl my-8 font-bold font-fontOne">
        Browse <span className="text-[#00863D]">Categories</span>
      </h1>
      <div>
        <div className="grid grid-cols-3 gap-20">
          {categories.map((category) => (
            <div
              key={category.id}
              className="p-3 border md:w-[384px] rounded-2xl"
            >
              <img
                className="w-full rounded-2xl h-72"
                src={category.imgSrc}
                alt={category.title}
              />
              <p className="bg-[#FFC313] py-1 px-3 my-3 rounded-3xl w-[35%]">
                {category.label}
              </p>
              <h1 className="text-2xl font-bold">{category.title}</h1>
              <p className="my-3">{category.description}</p>
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
