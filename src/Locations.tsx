import Navbar from "./components/navigation/Navbar";
import LocationsWelcome from "./components/locations/LocationsWelcome";
import LocationPic from "./components/locations/LocationPic";
import LocationList from "./components/locations/LocationList"; // adjust path if needed
import Footer from "./components/navigation/Footer";

const Locations = () => {
  return (
    <div>
      <div className="bg-nazgul_gray h-[130px] fixed w-dvw z-50 border-b-2 border-[rgba(211,175,55)]">
        <Navbar />
      </div>

      <LocationsWelcome />

      {LocationList.map((loc, index) => (
        <LocationPic key={index} location={loc.location} image={loc.image} description={loc.description} />
      ))}
      <div className="bg-nazgul_gray h-[260px] border-t-2 border-[rgba(211,175,55)]">
        <Footer />
      </div>
    </div>
  );
};

export default Locations;
