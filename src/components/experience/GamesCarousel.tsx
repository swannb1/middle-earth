import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ExperienceCarouselItem from "./ExperienceCarouselItem";

function GamesCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={null} slide={false} fade={false}>
      <Carousel.Item>
        <ExperienceCarouselItem name="Shadow of Mordor" id="CRLglREYEDs?si=Ix2n6SHzSzvFhReS&amp;controls=0" />
      </Carousel.Item>
      <Carousel.Item>
        <ExperienceCarouselItem name="Shadow of War" id="QoPuTeFhsUw?si=_80pPmezWOE9_rPp&amp;controls=0" />
      </Carousel.Item>
      <Carousel.Item>
        <ExperienceCarouselItem name="Return to Moria" id="lb9tFRx05aE?si=rpSgGoctxm7FDWwl&amp;controls=0" />
      </Carousel.Item>
      <Carousel.Item>
        <ExperienceCarouselItem name="Journey's in Middle Earth" id="ISBmaayR3oo?si=XATffboIjsolku3g" />
      </Carousel.Item>
    </Carousel>
  );
}

export default GamesCarousel;
