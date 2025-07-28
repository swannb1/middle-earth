import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ShinyText from "../../blocks/TextAnimations/ShinyText/ShinyText";

const EnemiesCarousel = () => {
  const [flippedCardIndex, setFlippedCardIndex] = useState<number | null>(null);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const itemClass = "bg-radagast_brown border-2 rounded-lg border-[rgba(211,175,55)] h-[500px] md:h-[550px]";
  const imgClass = "w-[100px] md:w-[150px] lg:w-[175px] max-h-full object-contain";
  const imgClass2 = "w-[150px] md:w-[200px] lg:w-[325px] max-h-full object-contain";

  const enemiesMembers = [
    {
      name: "Sauron",
      image: "/src/assets/images/Sauron.svg",
      race: "Ainur",
      age: "Unknown",
      realm: "Mordor",
      parents: "Eru Ilúvatar",
      description:
        "Sauron is the Dark Lord and the primary antagonist of the series. A former Maia, he forged the One Ring to dominate all life in Middle-earth. Though he lacks a physical form during the story, his influence spreads through fear and war. His defeat marks the end of the Third Age.",
    },
    {
      name: "Saruman",
      image: "/src/assets/images/SarumanEME.svg",
      race: "Ainur",
      age: "Unknown",
      realm: "Isengard",
      parents: "Eru Ilúvatar",
      description:
        "Once the head of the Istari, Saruman is a wizard who falls into corruption by seeking power. He allies with Sauron and creates an army of orcs to conquer Middle-earth. His downfall comes through his pride and betrayal. After losing his power, he meets a grim end in the Shire.",
    },
    {
      name: "Witch King",
      image: "/src/assets/images/WitchKing.svg",
      race: "Men",
      age: "4,209",
      realm: "Angmar",
      parents: "Unknown",
      description:
        "The Witch-king is the Lord of the Nazgûl and Sauron's most feared servant. Once a mortal king, he is now a wraith bound to the Ring's power. He leads Sauron’s forces and cannot be killed by any man. He is ultimately slain by Éowyn and Merry in a pivotal moment of defiance.",
    },
    {
      name: "Nazgûl",
      image: "/src/assets/images/Nazgul.svg",
      race: "Men",
      age: "Unknown",
      realm: "Minas Morgul",
      parents: "Unknown",
      description:
        "The Nazgûl, or Ringwraiths, are nine fallen kings enslaved by Sauron through the power of the Nine Rings. They are spectral beings that inspire terror and relentlessly hunt the Ring. Silent and nearly indestructible, they serve as Sauron's most dreaded lieutenants. Their fate is tied to the One Ring’s destruction.",
    },
    {
      name: "Shelob",
      image: "/src/assets/images/Shelob.svg",
      race: "Maia",
      age: "6,500 - 7,000",
      realm: "Cirith Ungol",
      parents: "Ungoliant",
      description:
        "Shelob is a monstrous, ancient spider dwelling in the pass of Cirith Ungol. She is not aligned with Sauron but poses a great threat to Frodo and Sam. Shelob lures victims into her lair to consume them. Sam wounds her in a fierce battle, allowing Frodo to escape.",
    },
    {
      name: "Balrog",
      image: "/src/assets/images/Balrog.svg",
      race: "Maiar (Corrupted)",
      age: "Unknown",
      realm: "Moria",
      parents: "Eru Ilúvatar",
      description:
        "Durin’s Bane is a Balrog, a fiery demon from the ancient world who dwells in Moria. It drove the dwarves out of Khazad-dûm and killed King Durin. Gandalf confronts it on the Bridge of Khazad-dûm in a legendary duel. Though Gandalf triumphs, it costs him his life—until he returns reborn.",
    },
    {
      name: "Gollum",
      image: "/src/assets/images/Gollum.svg",
      race: "Hobbit",
      age: "589",
      realm: "Dark Isolated Places",
      parents: "Unknown",
      description:
        "Gollum, once known as Sméagol, is a creature twisted by centuries of possession of the One Ring. He is obsessed with the Ring, calling it “my precious.” Gollum’s dual personality reflects his internal struggle between good and evil. He ultimately plays a key role in the Ring’s destruction.",
    },
    {
      name: "Grima Wormtongue",
      image: "/src/assets/images/Grima.svg",
      race: "Men",
      age: "45",
      realm: "Rohan",
      parents: "Gálmód",
      description:
        "Gríma, called Wormtongue, is a servant of Saruman who manipulates King Théoden of Rohan. Through deceit and poison, he weakens the king’s rule. He is expelled by Gandalf and later meets a tragic end. His character represents corruption through cunning rather than brute force.",
    },
    {
      name: "The Mouth of Sauron",
      image: "/src/assets/images/Mouth.svg",
      race: "Men",
      age: "Unknown",
      realm: "Mordor",
      parents: "Unknown",
      description:
        "The Mouth of Sauron is a dark emissary and spokesman for Sauron. Once a man, he gave himself over to Sauron’s will entirely. He meets Aragorn and others at the Black Gate, attempting to deceive and intimidate them. He is ultimately dismissed and silenced.",
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
          <p className="font-quicksand text-4xl text-white text-shadow-xs text-shadow-nazgul_gray text-center">Enemies of Middle-Earth</p>
          <p className="font-maitree text-xl text-white text-shadow-xs text-shadow-nazgul_gray text-center">
            Not all who roam Middle-Earth seek peace. From ancient monsters to corrupted souls, these are the dark forces that rose to challenge the
            light. Each leaving a lasting mark on the fate of the world.
          </p>
        </div>
        <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
          {enemiesMembers.map(({ name, image, race, age, realm, parents, description }) => (
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
                  <img
                    src={image}
                    alt={name}
                    className={
                      ["Sauron", "Witch King", "Nazgûl", "Shelob", "Balrog", "Grima Wormtongue", "The Mouth of Sauron"].includes(name)
                        ? imgClass2
                        : imgClass
                    }
                  />
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

export default EnemiesCarousel;
