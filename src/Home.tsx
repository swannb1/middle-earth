import Navbar from "./components/Navigation/Navbar";
import HomeCarousel from "./components/landing/Carousel";
import Welcome from "./components/landing/Welcome";
import Footer from "./components/Navigation/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const Home = () => {
  return (
    <div className="">
      <div className="bg-nazgul_gray h-[130px] fixed w-dvw z-50">
        <Navbar />
      </div>
      <div className="pt-[130px] bg-black">
        <HomeCarousel />
      </div>
      <div>
        <Welcome />
      </div>
      <div className="bg-nazgul_gray h-[260px]">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
