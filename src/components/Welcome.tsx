const Welcome = () => {
  return (
    <div className="relative bg-shire_green">
      {/* Transparent Leaves Background Layer */}
      <div
        className="absolute inset-0 bg-[url('/src/assets/images/leaves_texture.svg')] bg-cover opacity-10 pointer-events-none"
        aria-hidden="true"
      />

      {/* Content Layer */}
      <div className="relative z-10 p-8">
        <h1 className="font-bilbo text-black">Welcome to Middle Earth</h1>
        <h2 className="font-quicksand">the world of The Lord Of The Rings</h2>
        <p className="font-maitree">
          A gateway for first-timers and longtime fans alike — discover the beauty, depth, and wonder that continue to inspire generations. Whether
          you're taking your first step or your hundredth, this is your guide to the timeless magic of Tolkien's world.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
