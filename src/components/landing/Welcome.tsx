const Welcome = () => {
  return (
    <div className="relative bg-shire_green">
      {/* Transparent Leaves Background Layer */}
      <div
        className="absolute inset-0 bg-[url('/src/assets/images/leaves_texture.svg')] bg-cover opacity-10 pointer-events-none"
        aria-hidden="true"
      />

      {/* Content Layer */}
      <div className="relative z-10 h-dvh flex items-center justify-center px-6">
        <div className="bg-white/20 backdrop-blur-md rounded-lg shadow-xl p-10 text-center max-w-4xl">
          <p className="font-bilbo text-nazgul_gray text-[5rem] leading-tight">Welcome to Middle Earth</p>
          <p className="font-quicksand text-[2rem] text-nazgul_gray mt-2 mb-4">the world of The Lord Of The Rings</p>
          <p className="font-maitree text-base text-nazgul_gray">
            A gateway for first-timers and longtime fans alike — discover the beauty, depth, and wonder that continue to inspire generations. Whether
            you're taking your first step or your hundredth, this is your guide to the timeless magic of Tolkien's world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
