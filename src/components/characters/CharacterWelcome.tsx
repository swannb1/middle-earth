const CharWel = () => {
  return (
    <div>
      <div>
        <div className="relative bg-shire_green">
          {/* Transparent Leaves Background Layer */}
          <div
            className="absolute inset-0 bg-[url('/src/assets/images/leaves_texture.svg')] bg-cover opacity-10 pointer-events-none"
            aria-hidden="true"
          />

          {/* Content Layer */}
          <div className="relative z-10 h-screen flex items-center justify-center px-6">
            <div className="bg-white/20 backdrop-blur-md rounded-lg shadow-xl p-10 text-center max-w-6xl">
              <p className="font-bilbo text-nazgul_gray text-[5rem] leading-tight">The characters who changed middle Earth</p>
              <p className="font-quicksand text-[2rem] text-nazgul_gray mt-2 mb-4">Heroes, villains and everyone in between.</p>
              <p className="font-maitree text-[1rem] text-nazgul_gray">
                The story of Middle-Earth isn't just about battles or ancient magic, it's about the people at the heart of it all. From the brave
                members of the Fellowship to the powerful White Council and the enemies they faced. Each character shape the journey in unforgettable
                ways. Whether you're meeting with them for the first time or reconnecting with old favorites, this is where the legend begins!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharWel;
