import CharWel from "./components/characters/CharacterWelcome";
import Navbar from "./components/navigation/Navbar";
import FellowshipCarousel from "./components/characters/FellowshipCarousel";
import WhiteCouncilCarousel from "./components/characters/WhiteCouncil";
import EnemiesCarousel from "./components/characters/EnemiesCarousel";

const Characters = () => {
  return (
    <div>
      <div className="bg-nazgul_gray h-[130px] fixed w-dvw z-50 border-b-2 border-[rgba(211,175,55)]">
        <Navbar />
      </div>
      <div>
        <CharWel />
      </div>
      <div>
        <FellowshipCarousel />
      </div>
      <div>
        <WhiteCouncilCarousel />
      </div>
      <div>
        <EnemiesCarousel />
      </div>
    </div>
  );
};

export default Characters;
