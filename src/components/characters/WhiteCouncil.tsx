import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ShinyText from "../../blocks/TextAnimations/ShinyText/ShinyText";

const WhiteCouncilCarousel = () => {
  const [flippedCardIndex, setFlippedCardIndex] = useState<number | null>(null);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const itemClass = "bg-elven_forrest_green border-2 rounded-lg border-[rgba(211,175,55)] h-[500px] md:h-[550px]";
  const imgClass = "w-[100px] md:w-[150px] lg:w-[175px] max-h-full object-contain";
  const imgClass2 = "w-[125px] md:w-[200px] lg:w-[225px] max-h-full object-contain";

  const whiteCouncilMembers = [
    {
      name: "Elrond half-elven",
      image: "/src/assets/images/Elrond.svg",
      race: "Half Elf",
      age: "6,518",
      realm: "Rivendell",
      parents: "Eärendil and Elwing",
      description:
        "Elrond is the Lord of Rivendell and one of the greatest Elves remaining in Middle-earth. He provides counsel and protection, helping form the Fellowship. Wise and compassionate, he is also the father of Arwen, who loves Aragorn. Like Galadriel, he departs Middle-earth after the war.",
    },
    {
      name: "Galadriel",
      image: "/src/assets/images/Galadriel.svg",
      race: "Elf",
      age: "8,374",
      realm: "Lothlórien",
      parents: "Finarfin and Eärwen",
      description:
        "Galadriel is the Lady of Lothlórien, one of the most powerful and ancient Elves in Middle-earth. She offers guidance and gifts to the Fellowship. Her wisdom and beauty are unmatched, and she resists the temptation of the Ring. After Sauron’s defeat, she sails into the West.",
    },
    {
      name: "Gandalf",
      image: "/src/assets/images/GandalfWC.svg",
      race: "Ainur",
      age: "Unknown",
      realm: "None",
      parents: "Eru Ilúvatar",
      description:
        "Gandalf was a key member of the White Council, a group formed to counter Sauron’s growing shadow. Though not its leader, he was often its wisest and most perceptive voice, urging action against evil forces when others hesitated. He opposed the use of power for domination, preferring to inspire others toward resistance.",
    },
    {
      name: "Saruman",
      image: "/src/assets/images/SarumanWC.svg",
      race: "Ainur",
      age: "Unknown",
      realm: "Isengard",
      parents: "Eru Ilúvatar",
      description:
        "Saruman was the appointed leader of the White Council, respected for his knowledge and authority among Elves and wizards alike. Initially a strong opponent of Sauron, he grew prideful and secretive, eventually seeking the One Ring for himself. His ambition and distrust of Gandalf foreshadowed his fall from grace.",
    },
  ];

  return (
    <div className="relative bg-shire_green py-10 flex justify-center">
      {/* Transparent Leaves Background Layer */}
      <div
        className="absolute inset-0 bg-[url('/src/assets/images/leaves_texture.svg')] bg-cover opacity-10 pointer-events-none"
        aria-hidden="true"
      />

      {/* Content Layer */}
      <div className="relative z-10 w-full max-w-6xl">
        <div>
          <p className="font-quicksand text-4xl text-white text-shadow-xs text-shadow-nazgul_gray text-center">The White Council</p>
          <p className="font-maitree text-xl text-white text-shadow-xs text-shadow-nazgul_gray text-center">
            The wisest minds and most powerful leaders of their age, the White Council was formed to confront the rising threat of evil. Though their
            paths and choices differed, their purpose was clear: to protect the Free Peoples of Middle-Earth.
          </p>
        </div>
        <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
          {whiteCouncilMembers.map(({ name, image, race, age, realm, parents, description }) => (
            <Carousel.Item key={name} className={itemClass}>
              {/* Blue texture overlay */}
              <div
                className="absolute inset-0 bg-[url('/src/assets/images/blue_texture.svg')] bg-cover opacity-30 rounded-lg pointer-events-none"
                aria-hidden="true"
              />

              {/* Main content layer */}
              <div className="relative flex flex-col justify-center items-center h-full p-6">
                <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-10 text-white text-center md:text-left">
                  {/* Character Image */}
                  <img src={image} alt={name} className={["Elrond half-elven", "Gandalf"].includes(name) ? imgClass2 : imgClass} />

                  {/* Character Details with blur background */}
                  <div
                    className="w-[300px] h-[300px] perspective cursor-pointer"
                    onClick={() => setFlippedCardIndex(flippedCardIndex === index ? null : index)}
                  >
                    <div
                      className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                        flippedCardIndex === index ? "rotate-y-180" : ""
                      }`}
                    >
                      {/* Front Side */}
                      <div className="absolute w-full h-full backface-hidden bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white">
                        <ShinyText text={name} className="font-bilbo text-5xl mb-4 text-shadow-lg" />
                        <p className="text-lg text-shadow-md text-shadow-nazgul_gray">
                          <strong>Race:</strong> {race}
                        </p>
                        <p className="text-lg text-shadow-md text-shadow-nazgul_gray">
                          <strong>Age:</strong> {age}
                        </p>
                        <p className="text-lg text-shadow-md text-shadow-nazgul_gray">
                          <strong>Realm:</strong> {realm}
                        </p>
                        <p className="text-lg text-shadow-md text-shadow-nazgul_gray">
                          <strong>Parents:</strong> {parents}
                        </p>
                      </div>

                      {/* Back Side */}
                      <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-black/70 backdrop-blur-sm rounded-lg p-4 text-white overflow-auto">
                        <p className="text-base text-shadow-sm text-shadow-nazgul_gray">{description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default WhiteCouncilCarousel;
