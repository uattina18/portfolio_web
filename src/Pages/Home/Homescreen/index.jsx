import HeroSection from "../HeroSection";
import Products from "../Products";
import About from "../About";

import Contacts from "../ContactMe";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Vetrina from "../Vetrina";

const index = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <Products />
      <Vetrina />
      <Contacts />
      <Footer />
    </div>
  );
};

export default index;
