import Navbar from "../navigation/Navbar";

const ExperienceWelcome = () => {
  return (
    <div>
      <div className="bg-nazgul_gray h-[130px] fixed w-dvw z-50 border-b-2 border-[rgba(211,175,55)]">
        <Navbar />
      </div>
      <div className="relative bg-shire_green">
        {/* Transparent Leaves Background Layer */}
        <div
          className="absolute inset-0 bg-[url('/src/assets/images/leaves_texture.svg')] bg-cover opacity-10 pointer-events-none"
          aria-hidden="true"
        />

        {/* Content Layer */}
        <div className="relative z-10 h-dvh flex items-center justify-center px-6">
          <div className="bg-white/20 backdrop-blur-md rounded-lg shadow-xl p-10 text-center max-w-4xl">
            <p className="font-bilbo text-nazgul_gray text-[5rem] leading-tight">Experiencing middle-Earth</p>
            <p className="font-quicksand text-[2rem] text-nazgul_gray mt-2 mb-4">
              Books, films and games. Your guide to exploring Tolkien's world, your way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceWelcome;
