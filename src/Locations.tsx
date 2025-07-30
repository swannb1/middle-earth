import LocationsWelcome from "./components/locations/LocationsWelcome";
import LocationPic from "./components/locations/LocationPic";
import LocationList from "./components/locations/LocationList"; // adjust path if needed

const Locations = () => {
  return (
    <div>
      <LocationsWelcome />

      {LocationList.map((loc, index) => (
        <LocationPic key={index} location={loc.location} image={loc.image} description={loc.description} />
      ))}
    </div>
  );
};

export default Locations;
