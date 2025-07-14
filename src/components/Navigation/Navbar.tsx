import Navbutton from "./Navbutton";

const tempClick = () => {
  console.log("this worked");
};

const Navbar = () => {
  return (
    <div className="flex justify-around items-center size-full">
      <div className="flex justify-around w-[33%] mt-[40px]">
        <Navbutton name="The Journey" handleClick={tempClick} />
        <Navbutton name="Characters" handleClick={tempClick} />
        <Navbutton name="Locations" handleClick={tempClick} />
      </div>
      <div className="w-[33%">
        <a>
          <img src="../src/assets/Logo_White_Tree@4x1.svg" alt="White Tree Logo" className="w-[112px]" />
        </a>
      </div>
      <div className="flex justify-around w-[33%] mt-[40px]">
        <Navbutton name="Experiencing Middle Earth" handleClick={tempClick} />
        <Navbutton name="Beyond The Story" handleClick={tempClick} />
      </div>
    </div>
  );
};

export default Navbar;
