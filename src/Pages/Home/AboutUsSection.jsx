import secImg from "../../assets/aboutUsImg.png";

const AboutUsSection = () => {
  return (
    <div className="relative p-28">
      <div className="absolute inset-0 bg-gradient-to-t from-[#eaf7ea] -z-10"></div>

      <div className="flex items-center justify-center gap-5 relative">
        <img className="w-[450px] h-[300px]" src={secImg} alt="" />
        <div>
          <h1 className="text-3xl mb-3 font-fontOne font-bold">
            <span className="text-[#00863D]">About</span> Us
          </h1>
          <p className="w-[90%]">
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
