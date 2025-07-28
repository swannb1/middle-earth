import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ShinyText from "../../blocks/TextAnimations/ShinyText/ShinyText";

const FellowshipCarousel = () => {
  const [flippedCardIndex, setFlippedCardIndex] = useState<number | null>(null);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const itemClass = "bg-gandalf_gray border-2 rounded-lg border-[rgba(211,175,55)] h-[500px] md:h-[550px]";
  const imgClass = "w-[100px] md:w-[150px] lg:w-[175px] max-h-full object-contain";
  const imgClass2 = "w-[150px] md:w-[200px] lg:w-[325px] max-h-full object-contain";

  const fellowshipMembers = [
    {
      name: "Aragorn",
      image: "/src/assets/images/Aragorn.svg",
      race: "Dúnedain",
      age: "87",
      realm: "Gondor and Arnor",
      parents: "Arathorn II and Gilraen",
      description:
        "Aragorn is a skilled ranger and the rightful heir to the throne of Gondor. Noble, brave, and humble, he is a natural leader who earns the respect of men, elves, and dwarves alike. He helps guide the Fellowship and later leads armies against Sauron. After Sauron’s fall, he is crowned King Elessar and brings peace to the realm.",
    },
    {
      name: "Boromir",
      image: "/src/assets/images/Boromir.svg",
      race: "Men",
      age: "40",
      realm: "Gondor",
      parents: "Denethor II and Finduilas",
      description:
        "Boromir is the valiant son of Denethor, Steward of Gondor, and a member of the Fellowship. He seeks to use the Ring to defend his city but is corrupted by its power. He redeems himself by sacrificing his life to protect Merry and Pippin. His tragic arc underscores the Ring’s corruptive danger.",
    },
    {
      name: "Frodo Baggins",
      image: "/src/assets/images/Frodo.svg",
      race: "Hobbit",
      age: "50",
      realm: "Shire",
      parents: "Drogo Baggins and Primula Brandybuck",
      description:
        "Frodo is a humble hobbit of the Shire chosen to bear the One Ring to Mount Doom. He is brave and determined, though increasingly burdened by the Ring's corruptive power. His journey is one of inner strength, self-sacrifice, and the enduring cost of heroism. Despite completing his mission, the scars left by his journey lead him to seek healing in the Undying Lands.",
    },
    {
      name: "Gandalf",
      image: "/src/assets/images/GandalfFellow.svg",
      race: "Ainur",
      age: "Unknown",
      realm: "None",
      parents: "Eru Ilúvatar",
      description:
        "Gandalf is a wise and powerful wizard who plays a key role in the fight against Sauron. Disguised as an old man, he is in fact a Maia, a spirit sent to aid Middle-earth. Known for his wisdom, guidance, and occasional sternness, he leads the Fellowship and helps rally forces against evil. He transforms from Gandalf the Grey to Gandalf the White after his battle with the Balrog.",
    },
    {
      name: "Gimli",
      image: "/src/assets/images/Gimli.svg",
      race: "Dwarf",
      age: "139",
      realm: "Blue Mountains",
      parents: "Glóin",
      description:
        "Gimli is a proud and courageous dwarf warrior from the Lonely Mountain. He initially distrusts elves but becomes close friends with Legolas. Fierce in battle and loyal in spirit, he represents the strength of dwarves. After the war, he becomes Lord of the Glittering Caves.",
    },
    {
      name: "Legolas",
      image: "/src/assets/images/Legolas.svg",
      race: "Elf",
      age: "2,931",
      realm: "Woodland Realm Ithilien",
      parents: "Thranduil",
      description:
        "Legolas is an Elven prince of the Woodland Realm and a master archer. Agile and perceptive, he brings elven grace and precision to the Fellowship. His deepening friendship with Gimli, a dwarf, is a symbol of hope for unity between their races. He continues adventuring even after the war ends.",
    },
    {
      name: "Meriadoc (Merry) Brandybuck",
      image: "/src/assets/images/Merry.svg",
      race: "Hobbit",
      age: "52",
      realm: "Shire",
      parents: "Saradoc Brandybuck and Esmerelda Took",
      description:
        "Often called Merry, he is a clever and spirited hobbit who joins the Fellowship. He becomes a squire to King Théoden and fights bravely in the Battle of Pelennor Fields. Merry helps slay the Witch-king, a deed of great valor. He shows that even small folk can make a big impact.",
    },
    {
      name: "Peregrin (Pippin) Took",
      image: "/src/assets/images/Pippin.svg",
      race: "Hobbit",
      age: "50",
      realm: "Shire",
      parents: "Paladin II Took and Eglantine Banks",
      description:
        "Known as Pippin, he is a curious and sometimes impulsive hobbit who matures greatly through the war. He pledges service to Gondor and proves his courage in battle. His loyalty and heart make him an endearing and essential part of the story. After the war, he becomes a respected leader in the Shire.",
    },
    {
      name: "Samwise Gamgee",
      image: "/src/assets/images/Samwise.svg",
      race: "Hobbit",
      age: "102",
      realm: "Shire",
      parents: "Hamfast Gamgee and Bell Goodchild",
      description:
        "Samwise, or Sam, is Frodo’s loyal friend and gardener who proves to be one of the story’s greatest heroes. Courageous, steadfast, and deeply compassionate, Sam supports Frodo through every peril. His devotion and unshakeable will help bring the Ring to its destruction. After the war, he returns to the Shire and lives a long, peaceful life.",
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
          <p className="font-quicksand text-4xl text-white text-shadow-xs text-shadow-nazgul_gray text-center">The Fellowship of the Ring</p>
          <p className="font-maitree text-xl text-white text-shadow-xs text-shadow-nazgul_gray text-center">
            Nine companions. One mission. Tasked with destroying the One Ring, the Fellowship is made up of heroes from different lands and races.
            United by courage, loyalty, and a shared hope to save Middle-Earth from darkness.
          </p>
        </div>
        <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
          {fellowshipMembers.map(({ name, image, race, age, realm, parents, description }) => (
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
                  <img src={image} alt={name} className={["Aragorn", "Gimli", "Legolas"].includes(name) ? imgClass2 : imgClass} />

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

export default FellowshipCarousel;
