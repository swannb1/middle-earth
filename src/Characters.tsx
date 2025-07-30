import CharWel from "./components/characters/CharacterWelcome";
import FellowshipCarousel from "./components/characters/FellowshipCarousel";
import WhiteCouncilCarousel from "./components/characters/WhiteCouncil";
import EnemiesCarousel from "./components/characters/EnemiesCarousel";

const Characters = () => {
  return (
    <div>
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
