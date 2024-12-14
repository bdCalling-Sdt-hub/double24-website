import AboutUsSection from "./AboutUsSection";
import Banner from "./Banner";
import CategorySection from "./CategorySection";
import ContactUsSection from "./ContactUsSection";
import FAQSection from "./FAQSection";
import FullyLegalVideoSection from "./FullyLegalVideoSection";
import WhatIsSection from "./WhatIsSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutUsSection />
      <CategorySection />
      <WhatIsSection />
      <FullyLegalVideoSection />
      <ContactUsSection />
      <FAQSection />
    </div>
  );
};

export default Home;
