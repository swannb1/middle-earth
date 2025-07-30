import type { LocationType } from "./LocationList";

const LocationPic = ({ location, image, description }: LocationType) => {
  return (
    <div className="relative bg-shire_green">
      {/* Transparent Leaves Background Layer */}
      <div
        className="absolute inset-0 bg-[url('/src/assets/images/leaves_texture.svg')] bg-cover opacity-10 pointer-events-none"
        aria-hidden="true"
      />

      {/* Content Layer */}
      <div className="relative z-10 h-dvh flex flex-col items-center justify-center px-6 text-center gap-3">
        <p className="text-7xl font-bilbo text-white">{location}</p>
        <img src={image} alt={location} className="w-200 h-auto rounded-2xl border-2 border-[rgba(211,175,55)]" />
        <p className="text-white font-maitree max-w-xl">{description}</p>
      </div>
    </div>
  );
};

export default LocationPic;
