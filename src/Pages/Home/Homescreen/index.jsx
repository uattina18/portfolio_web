import HeroSection from "../HeroSection";
import Products from "../Products";
import About from "../About";
import { Tooltip } from "react-tooltip";
import Contacts from "../ContactMe";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Vetrina from "../Vetrina";

const index = () => {
  return (
    <div>
      <Tooltip id="my-tooltip" />
      <HeroSection />
      <About />
      <Products />

      <Vetrina />
    </div>
  );
};

export default index;
