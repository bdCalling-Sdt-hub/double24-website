import secImg from "../../assets/aboutUsImg.png";

const AboutUsSection = () => {
  return (
    <div className="relative p-6 md:p-28">
      <div className="absolute inset-0 bg-gradient-to-t from-[#eaf7ea] -z-10"></div>

      <div className="md:flex max-w-7xl mx-auto items-center justify-center gap-5 relative">
        <img
          className="md:w-[450px] md:h-[300px] shadow-xl"
          src={secImg}
          alt=""
        />
        <div>
          <h1 className="md:text-3xl text-2xl mb-3 clash mt-5 text-center md:text-left font-bold">
            <span className="text-[#00863D]">About</span> Us
          </h1>
          <p className=" text-justify">
            we are a leading supplier of high-quality THCA hemp flower,
            specializing in wholesale distribution for retailers and businesses.
            We offer a wide range of premium THCA strains in bulk, from pounds
            and half-pounds to quarter pounds, ensuring the best potency and
            value. Our mission is to provide businesses with top-tier products
            at competitive prices, backed by reliable service and fast delivery.
            Whether you’re looking to stock up on bulk THCA flower or explore
            white-label opportunities, we are committed to helping you grow your
            business with premium, legal THCA products.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
