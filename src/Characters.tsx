import CharWel from "./components/characters/CharacterWelcome";
import Navbar from "./components/navigation/Navbar";

const Characters = () => {
  return (
    <div>
      <div className="bg-nazgul_gray h-[130px] fixed w-dvw z-50 border-b-2 border-[rgba(211,175,55)]">
        <Navbar />
      </div>
      <CharWel />
    </div>
  );
};

export default Characters;
