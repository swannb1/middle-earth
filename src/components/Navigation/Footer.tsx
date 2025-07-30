import Navbutton from "./Navbutton";
import GetQuote from "./QuoteBox";
import { useNavigate } from "react-router-dom";

// const tempClick = () => {
//   console.log("This Worked");
// };

const Footer = () => {
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

  return (
    <div className="flex justify-around items-center size-full">
      <div className="w-[40%] pl-5 pr-5">
        <GetQuote />
      </div>
      <div className="grid grid-cols-2 gap-y-5 w-[30%]">
        <Navbutton name="The Journey" handleClick={journeyClick} />
        <Navbutton name="Experiencing Middle Earth" handleClick={experienceClick} />
        <Navbutton name="Characters" handleClick={characterClick} />
        <Navbutton name="Beyond The Story" handleClick={beyondClick} />
        <Navbutton name="Locations" handleClick={locationsClick} />
      </div>
      <div className="flex justify-center w-[30%]">
        <a>
          <img src="../src/assets/images/Logo_White_Tree@4x1.svg" alt="White Tree Logo" className="w-[234px]" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
