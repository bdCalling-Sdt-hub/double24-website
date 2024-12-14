import TitleBg from "../Components/ui/TitleBg";
import aboutUsImg1 from "../assets/Frame 1000011859.png";
import aboutUsImg2 from "../assets/Frame 1000011859 (1).png";
import aboutUsImg3 from "../assets/Frame 1707481807.png";

const AboutUs = () => {
  return (
    <>
      <TitleBg title="About Us" />
      <div className="px-20">
        <div className="flex items-center justify-center gap-10 py-20">
          <div>
            <h1 className="text-4xl font-bold">
              <span className="text-[#00863D] font-semibold">About</span> Us
            </h1>
            <p className="my-5">
              Welcome to The Cannabis Club, your trusted destination for premium
              THCA products. We specialize in delivering high-quality cannabis
              flower and accessories for enthusiasts and businesses alike.
              Whether you're shopping for bulk orders or personal use, we ensure
              every product meets strict legal standards and exceeds your
              expectations in quality and potency.
            </p>
            <p>
              At The Cannabis Club, we prioritize transparency, offering
              lab-tested products that guarantee safety and satisfaction. Our
              curated selection includes premium strains, ounces, and wholesale
              options tailored to meet your needs. Join us in experiencing the
              best the industry has to offer—crafted for quality, delivered with
              care.
            </p>
          </div>
          <img
            className="w-[586px] h-[400px] shadow-xl"
            src={aboutUsImg1}
            alt=""
          />
        </div>
      </div>
      <div className="">
        <div className="relative py-20">
          <div className="absolute inset-0 bg-gradient-to-t from-[#eaf7ea] -z-10"></div>
          <div className="px-20 flex items-center justify-center gap-10 ">
            <img
              className="w-[586px] h-[400px] shadow-xl"
              src={aboutUsImg2}
              alt=""
            />
            <div>
              <h1 className="text-4xl font-bold">
                What{" "}
                <span className="text-[#00863D] font-semibold">We Offer?</span>
              </h1>
              <p className="my-5">
                Welcome to The Cannabis Club, your trusted destination for
                premium THCA products. We specialize in delivering high-quality
                cannabis flower and accessories for enthusiasts and businesses
                alike. Whether you're shopping for bulk orders or personal use,
                we ensure every product meets strict legal standards and exceeds
                your expectations in quality and potency.
              </p>
              <p>
                At The Cannabis Club, we prioritize transparency, offering
                lab-tested products that guarantee safety and satisfaction. Our
                curated selection includes premium strains, ounces, and
                wholesale options tailored to meet your needs. Join us in
                experiencing the best the industry has to offer—crafted for
                quality, delivered with care.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-20 ">
        <div className="flex items-center justify-center gap-10 py-20">
          <div>
            <h1 className="text-4xl font-bold">
              Why You{" "}
              <span className="text-[#00863D] font-semibold">Choose Us?</span>
            </h1>
            <p className="my-5">
              Welcome to The Cannabis Club, your trusted destination for premium
              THCA products. We specialize in delivering high-quality cannabis
              flower and accessories for enthusiasts and businesses alike.
              Whether you're shopping for bulk orders or personal use, we ensure
              every product meets strict legal standards and exceeds your
              expectations in quality and potency.
            </p>
            <p>
              At The Cannabis Club, we prioritize transparency, offering
              lab-tested products that guarantee safety and satisfaction. Our
              curated selection includes premium strains, ounces, and wholesale
              options tailored to meet your needs. Join us in experiencing the
              best the industry has to offer—crafted for quality, delivered with
              care.
            </p>
          </div>
          <img
            className="w-[586px] h-[400px] shadow-xl"
            src={aboutUsImg3}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
