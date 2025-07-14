import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navigation/Navbar";
import HomeCarousel from "./components/Carousel/Carousel";
import "./index.css";

function App() {
  return (
    <div className="">
      <div className="bg-nazgul_gray h-[130px] fixed w-dvw z-10">
        <Navbar />
      </div>
      <div className="pt-[130px] bg-black">
        <HomeCarousel />
      </div>
    </div>
  );
}

export default App;
