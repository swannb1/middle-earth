import Navbutton from "./Navbutton";
import GetQuote from "./QuoteBox";

const tempClick = () => {
  console.log("This Worked");
};

const Footer = () => {
  return (
    <div className="flex justify-around items-center size-full">
      <div className="w-[40%] pl-5 pr-5">
        <GetQuote />
      </div>
      <div className="grid grid-cols-2 gap-y-5 w-[30%]">
        <Navbutton name="The Journey" handleClick={tempClick} />
        <Navbutton name="Experiencing Middle Earth" handleClick={tempClick} />
        <Navbutton name="Characters" handleClick={tempClick} />
        <Navbutton name="Beyond The Story" handleClick={tempClick} />
        <Navbutton name="Locations" handleClick={tempClick} />
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
