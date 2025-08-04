import ExperienceWelcome from "./components/experience/ExperienceWelcome";
import GamesCarousel from "./components/experience/GamesCarousel";
import FilmsCarousel from "./components/experience/FilmsCarousel";
import BooksCarousel from "./components/experience/BooksCarousel";

const Experience = () => {
  return (
    <div>
      <div>
        <ExperienceWelcome />
      </div>

      {/* Games Section with Leaves Background */}
      <div className="relative bg-nazgul_gray border-t-2 border-[rgba(211,175,55)] overflow-hidden">
        {/* Leaves Background */}
        <div
          className="absolute inset-0 bg-[url('/src/assets/images/leaves_texture.svg')] bg-cover opacity-10 pointer-events-none z-0"
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative z-10 pb-5">
          <p className="font-quicksand text-5xl text-white pt-7 text-center">Books</p>
          <BooksCarousel />
          <p className="font-quicksand text-5xl text-white pt-7 text-center">Films</p>
          <FilmsCarousel />
          <p className="font-quicksand text-5xl text-white pt-7 text-center">Games</p>
          <GamesCarousel />
        </div>
      </div>
    </div>
  );
};

export default Experience;
