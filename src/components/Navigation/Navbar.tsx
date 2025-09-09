import { Link, useNavigate } from "react-router-dom";
import Navbutton from "./Navbutton";
import LoginButton from "./LoginButton";

// const tempClick = () => {
//   console.log("This Worked");
// };

const Navbar = () => {
  const navigate = useNavigate();
  const journeyClick = () => {
    navigate(`/journey`);
  };
  const characterClick = () => {
    navigate(`/characters`);
  };
  const locationsClick = () => {
    navigate(`/locations`);
  };
  const experienceClick = () => {
    navigate(`/experience`);
  };
  const beyondClick = () => {
    navigate(`/beyond`);
  };
  const loginclick = () => {
    navigate("/login");
  };
  return (
    <div className="flex items-center justify-between w-full px-6 sm:px-12 lg:px-24 py-6">
      <div className="flex flex-1 justify-center gap-6 sm:gap-8 lg:gap-12 items-center">
        <Navbutton name="The Journey" handleClick={journeyClick} />
        <Navbutton name="Characters" handleClick={characterClick} />
        <Navbutton name="Locations" handleClick={locationsClick} />
      </div>
      <div className="flex justify-center flex-1 items-center">
        <Link to="/">
          <img src="../src/assets/images/Logo_White_Tree@4x1.svg" alt="White Tree Logo" className="w-[95px]" />
        </Link>
      </div>
      <div className="flex flex-1 justify-center gap-6 sm:gap-8 lg:gap-12 items-center">
        <Navbutton name="Experiencing Middle Earth" handleClick={experienceClick} />
        <Navbutton name="Beyond The Story" handleClick={beyondClick} />
        <LoginButton handleClick={loginclick} />
      </div>
    </div>
  );
};

export default Navbar;
