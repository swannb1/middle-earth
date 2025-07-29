export type LocationType = {
  location: string;
  image: string;
  description: string;
};

const Location: LocationType[] = [
  {
    location: "The Shire",
    image: "/src/assets/images/shire.svg",
    description:
      "A peaceful and pastoral land in the northwest of Middle-earth, The Shire is home to the Hobbits. Its rolling green hills, quaint hobbit-holes, and slow pace of life embody simplicity and comfort. It stands as a symbol of what the heroes fight to protect throughout the story.",
  },
  {
    location: "Rivendell",
    image: "/src/assets/images/rivendell.svg",
    description:
      "Rivendell is a hidden Elven refuge nestled in a valley among the Misty Mountains, ruled by Elrond. It is a place of great beauty, wisdom, and healing, offering rest and council to weary travelers. Ancient and serene, Rivendell feels timeless and removed from the outside world's strife.",
  },
  {
    location: "Bree",
    image: "/src/assets/images/bree.svg",
    description:
      "Bree is a small village where Men and Hobbits live side by side, located at the crossroads of important travel routes. It has an earthy, rustic character, centered around the Prancing Pony inn, a hub for news and travelers. Though modest, Bree serves as a vital link between the Shire and the wider world.",
  },
  {
    location: "Erebor",
    image: "/src/assets/images/erebor.svg",
    description:
      "Erebor, also known as the Lonely Mountain, is the ancestral home of the Dwarves under the leadership of Thorin Oakenshield. Once seized by the dragon Smaug, it is later reclaimed and restored to glory. Its vast halls are carved deep into the mountain and filled with legendary treasures",
  },
  {
    location: "Helm's Deep",
    image: "/src/assets/images/helmsdeep.svg",
    description:
      "Helm’s Deep is a fortified valley in Rohan, guarded by the ancient stronghold known as the Hornburg. It becomes the site of a pivotal battle between the forces of Rohan and Saruman’s army of Uruk-hai. Its stone walls and narrow gorge make it one of the most defensible places in Middle-earth.",
  },
  {
    location: "Isengard",
    image: "/src/assets/images/isengard.svg",
    description:
      "Isengard was once a green and peaceful valley ruled by the wizard Saruman but was turned into an industrial fortress under his control. The tower of Orthanc rises from its center, dark and imposing. Saruman's deforestation and war machine symbolize his fall from wisdom into corruption.",
  },
  {
    location: "Mount Doom",
    image: "/src/assets/images/mountdoom.svg",
    description:
      "Mount Doom is the fiery volcano in the land of Mordor where the One Ring was forged. It is the only place where the Ring can be destroyed, making it the ultimate goal of Frodo's perilous journey. Surrounded by ash and shadow, it represents both a physical and moral crucible.",
  },
];

export default Location;
