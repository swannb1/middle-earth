import HomeCarousel from "./components/landing/Carousel";
import Welcome from "./components/landing/Welcome";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const Home = () => {
  return (
    <div className="">
      <div className="pt-[130px] bg-black">
        <HomeCarousel />
      </div>
      <div>
        <Welcome />
      </div>
    </div>
  );
};

export default Home;
