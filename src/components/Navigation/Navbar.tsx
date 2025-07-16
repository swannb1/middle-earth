import { Link, useNavigate } from "react-router-dom";
import Navbutton from "./Navbutton";

const tempClick = () => {
  console.log("This Worked");
};

const Navbar = () => {
  const navigate = useNavigate();
  const journeyClick = () => {
    navigate(`/journey`);
  };
  return (
    <div className="flex justify-around items-center size-full">
      <div className="flex justify-around w-[33%] mt-[40px]">
        <Navbutton name="The Journey" handleClick={journeyClick} />
        <Navbutton name="Characters" handleClick={tempClick} />
        <Navbutton name="Locations" handleClick={tempClick} />
      </div>
      <div className="w-[33%">
        <Link to="/">
          <img src="../src/assets/images/Logo_White_Tree@4x1.svg" alt="White Tree Logo" className="w-[112px]" />
        </Link>
      </div>
      <div className="flex justify-around w-[33%] mt-[40px]">
        <Navbutton name="Experiencing Middle Earth" handleClick={tempClick} />
        <Navbutton name="Beyond The Story" handleClick={tempClick} />
      </div>
    </div>
  );
};

export default Navbar;
