import HeroSection from "../HeroSection";
import About from "../About";
import Contacts from "../ContactMe";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Products from "../Products";

const index = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <Contacts />
      <Footer />
      <Navbar />
      <Products />
    </div>
  );
};

export default index;
